const ENV = {
    BASE_URL: "https://example.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
};

const USER = {
    id: 101,
    name: "John Doe",
    email: "john@example.com",
    isActive: true,
    roles: ["admin", "editor"]
};

const CART = {
    items: [
        { id: 1, product: "Laptop", price: 999, qty: 1 },
        { id: 2, product: "Mouse", price: 25, qty: 2 }
    ],
    total: 1049,
    currency: "USD"
};

const API_RESPONSE = {
    status: 200,
    message: "OK",
    data: {
        users: [],
        totalPages: 5,
        currentPage: 1
    }
};

const CONFIG = {
    appName: "MyApp",
    version: "1.0.0",
    features: {
        darkMode: true,
        notifications: false,
        export: true
    },
    getFullName: function () {
        return `${this.appName} v${this.version}`;
    }
};
