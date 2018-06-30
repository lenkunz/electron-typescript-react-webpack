import * as Path from "path";

class Config {
    public readonly Title: string = "Allticket";
    public readonly Agent: string = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101";
    public readonly CWD: string = process.cwd();
    public readonly CookieStorePath: string = Path.join(this.CWD, "cookie.json");
    public readonly IsDevelopment: boolean = process.env.NODE_ENV !== "production";
    public readonly DevelopmentPort: number = 3000;
}

export default new Config();
