import { Request, Response } from 'express';
import { ItemDoPedido } from '../models/ItemDoPedido';

export const getItemDoPedidoById = async (req: Request, res: Response) => {
    try {
        const itemDoPedidoId = parseInt(req.params.id, 10);
        const itemDoPedido = await ItemDoPedido.findByPk(itemDoPedidoId);

        if (itemDoPedido) {
            res.json(itemDoPedido);
        } else {
            res.status(404).json({message: 'Item do Pedido não encontrado'});
        }
    } catch (error) {
        console.error('Erro ao buscar cliente:', error);
        res.status(500).json({message: 'Erro ao buscar cliente'});
    }
};
export function listarItensDoPedido(arg0: string, listarItensDoPedido: any) {
    throw new Error('Function not implemented.');
}

export function incluirItemDoPedido(arg0: string, incluirItemDoPedido: any) {
    throw new Error('Function not implemented.');
}

export function atualizarItemDoPedido(arg0: string, atualizarItemDoPedido: any) {
    throw new Error('Function not implemented.');
}

export function excluirItemDoPedido(arg0: string, excluirItemDoPedido: any) {
    throw new Error('Function not implemented.');
}

