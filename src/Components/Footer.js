import { isAdmin, isDriver } from "../Helpers/Session";
const Footer = () => {
    return (
        <>
            {isAdmin || isDriver ?
                (<></>)
                :
                (<> <footer className="w-full bg-primary h-16 text-white font-normal text-center pb-8 py-5 relative inset-x-0 bottom-0">
                    Made with ❤️ by Taichan2.0 2022
                </footer></>)}

        </>
    );
}

export default Footer;