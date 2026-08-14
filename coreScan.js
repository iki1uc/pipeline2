export function coreScan(){
    return {
        id: "CORE",
        core: true,
        fn: true,
        stable: true,
        ready: true,

        // RESPO‑Modul (360°)
        respo360: {
            id: "RESPO",
            active: true,
            level: 360,
            pulse: Date.now()
        },

        // Basisdaten für alle Pipeline‑Stationen
        source: "RAW",
        vector: {
            x: 0,
            y: 0,
            z: 0
        },

        // Debug
        stamp: Date.now()
    };
}

