export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const JenisKategori: {
    readonly RUNNING: "RUNNING";
    readonly FUTSAL: "FUTSAL";
    readonly CASUAL: "CASUAL";
    readonly FORMAL: "FORMAL";
    readonly SANDAL: "SANDAL";
};
export type JenisKategori = (typeof JenisKategori)[keyof typeof JenisKategori];
export declare const StatusPesanan: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type StatusPesanan = (typeof StatusPesanan)[keyof typeof StatusPesanan];
//# sourceMappingURL=enums.d.ts.map