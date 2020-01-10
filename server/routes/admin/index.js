module.exports = app => {
    const express = require("express");
    const jwt = require("jsonwebtoken");
    const assert = require('http-assert')
    const AdminUser = require("../../models/AdminUser");
    const router = express.Router({
        mergeParams: true
    });

    // const Category = require('../../models/Category')
    // 创建资源
    router.post("/", async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });
    // 修改资源
    router.put("/:id", async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    });
    // 删除资源
    router.delete("/:id", async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({
            success: true
        });
    });
    // 资源列表
    router.get(
        "/",
        async (req, res) => {
            const items = await req.Model.find()
                .populate("parent")
                .limit(100);
            res.send(items);
        }
    );

    router.get("/:id", async (req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model);
    });
    // 登陆校验中间件
    const authMiddleware = require('../../middleware/auth')
    // 资源中间件
    const resourceMiddleware = require('../../middleware/resource')

    app.use(
        "/admin/api/rest/:resource", authMiddleware(), resourceMiddleware(), router
    );

    const multer = require("multer");
    const upload = multer({
        dest: __dirname + "/../../uploads"
    });
    app.post("/admin/api/upload", authMiddleware(), upload.single("file"), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    });

    app.post("/admin/api/login", async (req, res) => {
        const {
            username,
            password
        } = req.body;
        // 1.根据用户名找用户
        const AdminUser = require("../../models/AdminUser");
        const user = await AdminUser.findOne({
            username
        }).select("+password");

        assert(user, 422, "用户不存在");

        // 2.验证密码
        const isValid = require("bcryptjs").compareSync(password, user.password);
        assert(isValid, 422, "密码错误");

        // 3.返回token
        const token = jwt.sign({
                id: user._id
            },
            app.get("secret")
        );
        res.send({
            token
        });
    });
    // 错误处理函数
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        });
    });
};