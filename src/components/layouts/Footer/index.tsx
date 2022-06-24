import { FILTERS } from "../../../utils/constanst";
import "./style.scss";
function Footer(props: any) {
   const { filter, handleFilter, clearCompleted, todoList } = props;
   return (
      <footer className="footer">
         <span>
            <span>{todoList.filter(FILTERS.active).length}</span> item left
         </span>
         <ul className="filters">
            {Object.keys(FILTERS).map((key, index) => (
               <li
                  key={index}
                  className={`${filter === key && "selected"}`}
                  onClick={() => handleFilter(key)}
               >
                  {key[0].toUpperCase() + key.slice(1)}
               </li>
            ))}
         </ul>
         <div className="box-clear">
            <button className="clear" onClick={clearCompleted}>
               Clear Completed
            </button>
         </div>
      </footer>
   );
}

export default Footer;
