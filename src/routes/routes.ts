import { Router } from "express";
import { UserModel } from "../model/User";

const router = Router();

router.post ('/contacto', async (req, res) => {
    try {
        const newContact = new UserModel(req.body);
        await newContact.save();
        res.status(200).json({message: 'Contacto guardado exitosamente.'})
    } catch (error) {
        res.status(500).json({message: 'Error al guardar el contacto.'})
    }
})

export default router