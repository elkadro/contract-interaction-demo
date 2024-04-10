import {Router} from "express";
import interactions from "./ahmad-inter"

const router = Router();
router.use("/interactions", interactions)

export default router;