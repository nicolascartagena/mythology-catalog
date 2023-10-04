import { Injectable, NestMiddleware, Catch } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../utils/errors';

@Injectable()
@Catch()
export class ValidationGodMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { codename, alias, mythology, area, power, description, image } = req.body;

        if(!codename) throw new ValidationError('codename is required');
        if(!alias) throw new ValidationError('alias is required');
        if(!mythology) throw new ValidationError('mythology is required');
        if(!area) throw new ValidationError('area is required');
        if(!power) throw new ValidationError('power is required');
        if(!description) throw new ValidationError('description is required');
        if(!image) throw new ValidationError('image is required');
        next();
    }
}