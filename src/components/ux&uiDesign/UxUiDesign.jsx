import MarketingSection2 from "./uxDesignItems/MarketingSection2"
import UxSection1 from "./uxDesignItems/UxSection1"


const UxUiDesign = () => {
  return (
    <div className="w-full min-h-screen lg:pl-[10vw] lg:pt-[5vw] lg:pb-[8vw] font-poppins flex relative  ">
        <UxSection1 />
        <MarketingSection2 />
    </div>
  )
}

export default UxUiDesign