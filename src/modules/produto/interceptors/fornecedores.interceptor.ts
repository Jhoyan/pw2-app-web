import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FornecedorService } from '../../fornecedor/fornecedor.service';

@Injectable()
export class FornecedoresInterceptor implements NestInterceptor {
    constructor(private readonly fornecedorService: FornecedorService) {}

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        request.fornecedores = await this.fornecedorService.findAll();
        return next.handle();
    }
}
