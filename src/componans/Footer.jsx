const Footer = ({classs=""}) => {
    return (
        <footer className="foot">
            {/* <a href='https://linktr.ee/ai.wadod' target='_blank'>تصميم و تطوير <span>ودود</span></a> */}
            <a href='https://linktr.ee/ai.wadod' target='_blank'>تصميم و تطوير <img style={{ marginBottom: "-5px", width: "60px",marginRight:"2px" }} src="footer.png" alt="footer" /></a>
        </footer>
    );
};

export default Footer;