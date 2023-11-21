import React from 'react';
import './TableTp.css'

import editPen from '../../../assets/icons/edit-pen.svg'
import trashDelete from '../../../assets/icons/trash-delete.svg'

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
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletarr</th>
                </tr>
            </thead>

            {/* Aqui vai o corpo da tabela */}

            <tbody>

                {dados.map((tp) => {
                    return (
                        <tr className="table-data__head-row" key={tp.idTipoEvento}> //passar aqui o id de evento
                            <td className="table-data__data table-data__data--big">
                                {tp.titulo}
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img
                                    className="table-data__icon"
                                    src={editPen}
                                    alt=""
                                    onClick={() => {
                                        fnUpdate(tp.idTipoEvento) //alterar para idEvento
                                    }}
                                />
                            </td>

                            <td
                                className="table-data__data table-data__data--little">
                                <img
                                    idtipoevento={tp.idTipoEvento} //mudar para idEvento
                                    className="table-data__icon"
                                    src={trashDelete}
                                    alt=""
                                    onClick={(e) => {
                                        //capiturando o evento de clicar no botão. O get attribute vai pegar a imagem e vai executar uma ação
                                        fnDelete(e.target.getAttribute('idtipoevento'))
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