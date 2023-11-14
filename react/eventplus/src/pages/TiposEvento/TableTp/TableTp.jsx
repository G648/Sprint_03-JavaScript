import React from 'react';
import './TableTp.css'

import editPen from '../../../assets/icons/edit-pen.svg'
import trashDelete from '../../../assets/icons/trash-delete.svg'

const TableTp = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className='table-data'>
            {/* cabeçalho da tabela */}

            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">Título</th>
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>

            {/* Aqui vai o corpo da tabela */}

            <tbody>

                {dados.map((tp) => {
                    return (
                        <tr className="table-data__head-row">
                            <td className="table-data__data table-data__data--big">
                                Texto do tipo
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={editPen} alt="" />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={trashDelete} alt="" />
                            </td>
                        </tr>
                    );
                })}


            </tbody>
        </table>
    );
};

export default TableTp;