// import React from 'react';
// import './TableE.css'

// import editPen from '../../../Assets/icons/edit-pen.svg'
// import trashDelete from '../../../Assets/icons/trash-delete.svg'

// import {dateFormatDbToView} from '../../../Utils/stringFunctions'

// const TableE = ({ dados, fnDelete = null, fnUpdate = null }) => {
//     return (
//         <table className='table-data'>
//             {/* cabeçalho da tabela */}

//             <thead className="table-data__head">
//                 <tr className="table-data__head-row">
//                     <th className="table-data__head-title table-data__head-title--big">Evento</th>
//                     <th className="table-data__head-title table-data__head-title--big">Descricao</th>
//                     <th className="table-data__head-title table-data__head-title--big">TipoEvento</th>
//                     <th className="table-data__head-title table-data__head-title--Big">Data</th>
//                     <th className="table-data__head-title table-data__head-title--little">Editar</th>
//                     <th className="table-data__head-title table-data__head-title--little">Deletar</th>
//                 </tr>
//             </thead>

//             {/* Aqui vai o corpo da tabela */}

//             <tbody>

//                 {dados.map((tp) => {
//                     return (
//                         <tr className="table-data__head-row" key={tp.idEvento}> 
//                             <td className="table-data__data table-data__data--big">
//                                 {tp.nomeEvento}
//                             </td>
//                             <td className="table-data__data table-data__data--big">
//                                 {tp.descricao}
//                             </td>
//                             <td className="table-data__data table-data__data--big">
//                                 {tp.tiposEvento.titulo}
//                             </td>
//                             <td className="table-data__data table-data__data--big">
//                                 {dateFormatDbToView(tp.dataEvento)}
//                             </td>

//                             <td className="table-data__data table-data__data--little">
//                                 <img
//                                     className="table-data__icon"
//                                     src={editPen}
//                                     alt=""
//                                     onClick={() => {
//                                         fnUpdate(tp.idEvento) //alterar para idEvento
//                                     }}
//                                 />
//                             </td>

//                             <td
//                                 className="table-data__data table-data__data--little">
//                                 <img
//                                     idtipoevento={tp.idEvento} //mudar para idEvento
//                                     className="table-data__icon"
//                                     src={trashDelete}
//                                     alt=""
//                                     onClick={(e) => {
//                                         //capiturando o evento de clicar no botão. O get attribute vai pegar a imagem e vai executar uma ação
//                                         fnDelete(tp.idEvento)
//                                     }}
//                                 />
//                             </td>
//                         </tr>
//                     );
//                 })}


//             </tbody>
//         </table>
//     );
// };

// export default TableE;
import React from 'react';
import './TableE.css'
import editPen from '../../../Assets/icons/edit-pen.svg'
import trashDelete from '../../../Assets/icons/trash-delete.svg'
import { dateFormatDbToView } from '../../../Utils/stringFunctions';
import { Tooltip } from "react-tooltip";
const TableE = ({ dados, fnDelete = null, fnUpdate = null }) => {
  return (
    <table className='table-data'>
      {/* cabeçalho */}
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">Evento</th>
          <th className="table-data__head-title table-data__head-title--big">Descrição</th>
          <th className="table-data__head-title table-data__head-title--big">Tipo Evento</th>
          <th className="table-data__head-title table-data__head-title--big">Data</th>
          <th className="table-data__head-title table-data__head-title--little">Editar</th>
          <th className="table-data__head-title table-data__head-title--little">Deletar</th>
        </tr>
      </thead>
      {/* corpo */}

      <tbody>
        {dados.map((tp) => {
          return (

            <tr className="table-data__head-row" key={tp.idEvento}>
              <td className="table-data__data table-data__data--big">
                {tp.nomeEvento}
              </td>
              <td
                className='table-data__data table-data__data--big'
                data-tooltip-id={tp.idEvento}
                data-tooltip-content={tp.descricao}
                data-tooltip-place="top"
              >
                <Tooltip id={tp.idEvento} className='tooltip' />
                {tp.descricao.substr(0, 15)}. . .
              </td>
              <td className="table-data__data table-data__data--big">
                {tp.tiposEvento.titulo}
              </td>
              <td className="table-data__data table-data__data--big">
                {dateFormatDbToView(tp.dataEvento)}
              </td>

              <td className="table-data__data table-data__data--little">
                <img

                  className="table-data__icon"
                  src={editPen}
                  alt=""
                  onClick={(e) => {
                    //fnUpdate(e.target.getAttribute('idtipoevento'))
                    fnUpdate(tp.idEvento)
                  }}
                />
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  idevento={tp.idEvento}
                  className="table-data__icon"
                  src={trashDelete}
                  alt=""
                  onClick={(e) => {
                    fnDelete(e.target.getAttribute('idevento'))
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