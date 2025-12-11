module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/inngest/client.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inngest",
    ()=>inngest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/inngest/components/Inngest.js [app-route] (ecmascript)");
;
const inngest = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Inngest"]({
    id: "quizHive"
});
}),
"[project]/inngest/functions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/inngest-functions.js
__turbopack_context__.s([
    "CreateNewUser",
    ()=>CreateNewUser,
    "helloWorld",
    ()=>helloWorld
]);
(()=>{
    const e = new Error("Cannot find module '@/configs/schema'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/inngest/client.js [app-route] (ecmascript)"); // keep this if your client file exports inngest
(()=>{
    const e = new Error("Cannot find module '@/configs/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
;
;
;
;
const helloWorld = __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"].createFunction({
    id: "hello-world"
}, {
    event: "test/hello.world"
}, async ({ event, step })=>{
    const { user } = event.data;
    await step.sleep("wait-a-moment", "1s");
    return {
        message: `Hello ${event.data.email}!`
    };
});
const CreateNewUser = __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"].createFunction({
    id: "create-user"
}, {
    event: "user.create"
}, async ({ event, step })=>{
    const { email, name } = event.data ?? {};
    const result = await step.run("Check User and create New if Not in DB", async ()=>{
        if (!email) {
            return {
                created: false,
                reason: "missing email"
            };
        }
        const existing = await db.select().from(USER_TABLE).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(USER_TABLE.email, email));
        if (!existing || existing.length === 0) {
            await db.insert(USER_TABLE).values({
                name: name ?? null,
                email
            });
            return {
                created: true
            };
        }
        return {
            created: false,
            reason: "already exists"
        };
    });
    return {
        status: "success",
        detail: result
    };
});
}),
"[project]/app/api/inngest/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/inngest/next.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/inngest/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/inngest/functions.js [app-route] (ecmascript)");
;
;
;
const { GET, POST, PUT } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serve"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"],
    functions: [
        /* your functions will be passed here later! */ __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["helloWorld"],
        __TURBOPACK__imported__module__$5b$project$5d2f$inngest$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateNewUser"]
    ]
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4fe20c9._.js.map