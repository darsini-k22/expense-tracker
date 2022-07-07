
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   console.log("Clicked!!!!");
  //   setTitle("Updated!!");
  // };
  return (
    <Card className="flex gap-8 bg-slate-500 justify-between items-center px-9 py-5 m-10 border-black ">
      <ExpenseDate date={props.date} />
      <div className="  font-bold text-3xl text-white flex-1 items-end justify-start flex-col-reverse">
        {props.title}
      </div>

      <div className="bg-gray-600 price">Rs.{props.amount}</div>
    </Card>
  );
}
