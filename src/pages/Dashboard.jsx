import BuyerProfilePieChart from "../components/BuyerProfilePieChart";
import DashboardHome from "../components/DashboardHome";
import PopularProducts from "../components/PopularProducts";
import RecentOrders from "../components/RecentOrders";
import TransactionChart from "../components/TransactionChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* Non-scrollable header */}
      <DashboardHome />

      {/* Scrollable section */}
      <div className="flex flex-row gap-4 w-full ">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>

      {/* Scrollable section */}
      <div className="flex flex-row gap-4 w-full ">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}
