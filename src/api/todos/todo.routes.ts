import { Router, Response, Request } from "express";
import {Todo, Todos, TodoWithId } from "./todo.model";

const router = Router();

router.get('/', async (req: Request, res: Response<TodoWithId[]>) => {
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos);
});



export default router;