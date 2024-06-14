
import express from "express";
import { getData} from "../controller/dataController";   

const router = express.Router();



router.route("/:filename").get(getData);

export default router;