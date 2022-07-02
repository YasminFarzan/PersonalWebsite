import Header from "./Header";
import Footer from "./Footer";
import{Outlet} from "react-router-dom"

function Page(){

    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>



    )
}

export default Page