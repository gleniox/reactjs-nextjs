import Image from "next/image";
import { useContext } from "react";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const Banner = ({ currentYear }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <header className="row mb-4">
      <div className="col-2">
        <img
          height="158"
          width="158"
          src="/logo.jpeg"
          alt="logo"
          onClick={() => navigate(navValues.home)}
        />
      </div>
      <div className="col-10 mt-5">
        <div>Cedo Expense Tracking System {currentYear}</div>
        <div>
          Designed to help individuals and families track, manage, and optimize
          their household finances.
        </div>
        <div>
          Expense Tracking: Users can easily input and categorize their
          expenses—such as groceries, utilities, and entertainment—providing a
          clear view of where their money goes each month.
        </div>
        <div>
          Reporting and Analytics: Comprehensive reports and visual analytics
          (like charts and graphs) provide insights into spending habits, income
          stability, and financial trends over time, facilitating informed
          decision-making.
        </div>
        <div>
          Collaborative Features: For households sharing finances, the system
          can provide collaboration tools, allowing multiple users to access and
          manage the budget transparently.
        </div>
        <div>
          Overall, Cedo enhances financial literacy, promotes responsible
          spending, and empowers users to take control of their financial
          futures with confidence.
        </div>
      </div>
    </header>
  );
};

export default Banner;
