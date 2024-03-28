import { Request, Response } from 'express';
import { Pedido } from '../models/Pedido';

export const getPedidoById = async (req: Request, res: Response) => {
    try {
        const pedidoId = parseInt(req.params.id, 10);
        const pedido = await Pedido.findByPk(pedidoId);
        
        if(pedido){
            res.json(pedido);
        }
        else{
            res.status(404).json({message: 'Pedido não encontrado'});
        }
    } catch (error) {
        console.error('Erro ao buscar pedido:', error);
        res.status(500).json({message: 'Erro ao buscar pedido'});
    }
}

export function listarPedidos(arg0: string, listarPedidos: any) {
    throw new Error('Function not implemented.');
}


export function incluirPedido(arg0: string, incluirPedido: any) {
    throw new Error('Function not implemented.');
}


export function atualizarPedido(arg0: string, atualizarPedido: any) {
    throw new Error('Function not implemented.');
}


export function excluirPedido(arg0: string, excluirPedido: any) {
    throw new Error('Function not implemented.');
}
