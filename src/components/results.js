import Single from "./single";

const Results = ({ currentItems, title, username }) => {
    return (
        <div>
            <h3>{title} results for {username}</h3>
            {currentItems &&
                currentItems.map((item) => {
                    return <Single key = { item.node_id } username = { item.login }/>
                })
            }
        </div>
      );
};
 
export default Results;