export default function Footer() {
    return (
        <footer
            id="footer"
            className="w-full h-[90px] flex items-center justify-center px-4 text-center dark:bg-dark-blue text-white text-sm sm:text-base"
        >
            <p className="text-xs sm:text-sm">
                © {new Date().getFullYear()} Thanaphat Jiamcharoendet. All rights reserved.
            </p>
        </footer>
    );
}
