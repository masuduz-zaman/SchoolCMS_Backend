import { NextFunction, Request, Response } from "express";
import { UserRole } from "@prisma/client";
declare global {
    namespace Express {
        interface Request {
            user?: {
                email: string;
                name: string;
                id: string;
                role: UserRole;
            };
        }
    }
}
export declare const auth: (...requiredRoles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map