const Footer = () => {
  return (
    <p className="px-8 text-center text-xs mt-5 text-muted-foreground">
      By clicking continue, you agree to our{" "}
      <a href="#" className="underline underline-offset-4 hover:text-primary">
        Terms of Service
      </a>{" "}
      and{" "}
      <a href="#" className="underline underline-offset-4 hover:text-primary">
        Privacy Policy
      </a>
      .
    </p>
  );
};

export default Footer;
