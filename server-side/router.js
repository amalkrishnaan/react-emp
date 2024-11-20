import { Router } from "express";
import * as rh from "./requestHandler.js";
import multer from "multer";
import path from 'path';

const router=Router()


router.route("/addemp").post(rh.addEmployee)
router.route("/displayemps").get(rh.displayEmployees)
router.route("/displayemp/:_id").get(rh.displayEmployee)
router.route("/updateemp/:_id").put(rh.updateEmployee)
router.route("/deleteemp/:_id").delete(rh.deleteEmployee)


export default router