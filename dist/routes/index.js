"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get('/users', usersController_1.getUsers);
router.get('/users/:id', usersController_1.getUserbyId);
router.post('/users', usersController_1.createUser);
router.put('/users/:id', usersController_1.updateUser);
router.delete('/users/:id', usersController_1.deleteUser);
exports.default = router;
