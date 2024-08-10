import style from "./trendSection.module.css"
import Trend from "@/app/(afterLogin)/_component/trend/Trend";

const TrendSection = () => {
  return (
    <div className={style.trendBg}>
        <div className={style.trend}>
           <h3>나를 위한 트랜드</h3>
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
        </div>
    </div>
  );
};

export default TrendSection;
