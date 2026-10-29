const http = require("node:http");

const cong = process.env.PORT || 3000;

const mayChu = http.createServer((yeuCau, phanHoi) => {
    phanHoi.setHeader("Content-Type", "application/json; charset=utf-8");
    phanHoi.setHeader("Access-Control-Allow-Origin", "*");

    if (yeuCau.method === "GET" && (yeuCau.url === "/" || yeuCau.url === "/api/hello")) {
        phanHoi.statusCode = 200;
        phanHoi.end(JSON.stringify({
            message: "Hello Cloud!",
            monHoc: "Thuc hanh Dien toan dam may",
            bai: 1,
            nenTang: "GitHub Codespaces",
            thoiGian: new Date().toISOString()
        }));
    } else if (yeuCau.method === "GET" && yeuCau.url === "/api/health") {
        phanHoi.statusCode = 200;
        phanHoi.end(JSON.stringify({ status: "OK" }));
    } else {
        phanHoi.statusCode = 404;
        phanHoi.end(JSON.stringify({ error: "Khong tim thay API" }));
    }
});

mayChu.listen(cong, "0.0.0.0", () => {
    console.log(`Hello Cloud API running at http://localhost:${cong}`);
});
