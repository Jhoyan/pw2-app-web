import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoService } from "./produto.service";
import { FornecedorService } from "../fornecedor/fornecedor.service";
import { FornecedoresInterceptor } from "./interceptors/fornecedores.interceptor";

@Module({
    imports: [],
    controllers: [ProdutoController],
    providers: [ProdutoService, FornecedorService, FornecedoresInterceptor],
})
export class ProdutoModule {}