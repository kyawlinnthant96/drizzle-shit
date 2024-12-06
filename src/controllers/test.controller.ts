import {NextFunction, Request, Response} from 'express';
import * as testServices from "../services/test.service"

export const getAllTest = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const test = await testServices.getAllTest();
    response.status(200).json(test);
}

export const createTest = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const test = await testServices.getAllTest();
    response.status(200).json(test);
}