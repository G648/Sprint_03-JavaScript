import React from 'react';
import './TableE.css'

import editPen from '../../../Assets/icons/edit-pen.svg'
import trashDelete from '../../../Assets/icons/trash-delete.svg'

const TableE = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className='table-data'>
            {/* cabeçalho da tabela */}

            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">Evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Descricao</th>
                    <th className="table-data__head-title table-data__head-title--big">TipoEvento</th>
                    <th className="table-data__head-title table-data__head-title--Big">Data</th>
                    <th className="table-data__head-title table-data__head-title--big">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>

            {/* Aqui vai o corpo da tabela */}

            <tbody>

                {dados.map((tp) => {
                    return (
                        <tr className="table-data__head-row" key={tp.idEvento}> 
                            <td className="table-data__data table-data__data--big">
                                {tp.nomeEvento}
                            </td>
                            <td className="table-data__data table-data__data--big">
                                {tp.descricao}
                            </td>
                            <td className="table-data__data table-data__data--big">
                                {tp.tiposEvento.titulo}
                            </td>
                            <td className="table-data__data table-data__data--big">
                                {tp.dataEvento}
                            </td>

                            <td className="table-data__data table-data__data--big">
                                <img
                                    className="table-data__icon"
                                    src={editPen}
                                    alt=""
                                    onClick={() => {
                                        fnUpdate(tp.idEvento) //alterar para idEvento
                                    }}
                                />
                            </td>

                            <td
                                className="table-data__data table-data__data--little">
                                <img
                                    idtipoevento={tp.idEvento} //mudar para idEvento
                                    className="table-data__icon"
                                    src={trashDelete}
                                    alt=""
                                    onClick={(e) => {
                                        //capiturando o evento de clicar no botão. O get attribute vai pegar a imagem e vai executar uma ação
                                        fnDelete(tp.idEvento)
                                    }}
                                />
                            </td>
                        </tr>
                    );
                })}


            </tbody>
        </table>
    );
};

export default TableE;