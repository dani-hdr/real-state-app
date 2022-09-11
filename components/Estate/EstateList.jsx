
import EstateItem from "./EstateItem";


const EstateList = ({items}) => {
  return (
    <div className="grid grid-cols-2 gap-7">
      {items.length === 0 && <p>Not found</p>}
      {items.map((data) => {
        return <EstateItem key={data.id} item={data} />;
      })}
    </div>
  );
};

export default EstateList;
