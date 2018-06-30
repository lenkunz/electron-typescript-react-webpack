import * as Path from "path";

class Config {
    public readonly Title: string = "WebApp";
    public readonly CWD: string = process.cwd();
    public readonly IsDevelopment: boolean = process.env.NODE_ENV !== "production";
    public readonly DevelopmentPort: number = 3000;
}

export default new Config();
