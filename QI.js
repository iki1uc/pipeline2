export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE",
            core: !!obj.core,
            fn: !!obj.fn,
            stable: !!obj.stable,
            ready: !!obj.ready,

            // RESPO‑Erkennung
            respo: obj.respo360 ? true : false,

            // Zeitstempel
            time: Date.now(),

            // Debug / Meta
            meta: {
                type: typeof obj,
                keys: Object.keys(obj)
            }
        };
    }
};

