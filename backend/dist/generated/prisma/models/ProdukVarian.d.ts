import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProdukVarian
 *
 */
export type ProdukVarianModel = runtime.Types.Result.DefaultSelection<Prisma.$ProdukVarianPayload>;
export type AggregateProdukVarian = {
    _count: ProdukVarianCountAggregateOutputType | null;
    _avg: ProdukVarianAvgAggregateOutputType | null;
    _sum: ProdukVarianSumAggregateOutputType | null;
    _min: ProdukVarianMinAggregateOutputType | null;
    _max: ProdukVarianMaxAggregateOutputType | null;
};
export type ProdukVarianAvgAggregateOutputType = {
    id: number | null;
    produk_id: number | null;
    stok: number | null;
};
export type ProdukVarianSumAggregateOutputType = {
    id: number | null;
    produk_id: number | null;
    stok: number | null;
};
export type ProdukVarianMinAggregateOutputType = {
    id: number | null;
    produk_id: number | null;
    warna: string | null;
    ukuran: string | null;
    stok: number | null;
    gambar: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProdukVarianMaxAggregateOutputType = {
    id: number | null;
    produk_id: number | null;
    warna: string | null;
    ukuran: string | null;
    stok: number | null;
    gambar: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProdukVarianCountAggregateOutputType = {
    id: number;
    produk_id: number;
    warna: number;
    ukuran: number;
    stok: number;
    gambar: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ProdukVarianAvgAggregateInputType = {
    id?: true;
    produk_id?: true;
    stok?: true;
};
export type ProdukVarianSumAggregateInputType = {
    id?: true;
    produk_id?: true;
    stok?: true;
};
export type ProdukVarianMinAggregateInputType = {
    id?: true;
    produk_id?: true;
    warna?: true;
    ukuran?: true;
    stok?: true;
    gambar?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProdukVarianMaxAggregateInputType = {
    id?: true;
    produk_id?: true;
    warna?: true;
    ukuran?: true;
    stok?: true;
    gambar?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProdukVarianCountAggregateInputType = {
    id?: true;
    produk_id?: true;
    warna?: true;
    ukuran?: true;
    stok?: true;
    gambar?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ProdukVarianAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProdukVarian to aggregate.
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdukVarians to fetch.
     */
    orderBy?: Prisma.ProdukVarianOrderByWithRelationInput | Prisma.ProdukVarianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProdukVarianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdukVarians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdukVarians.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProdukVarians
    **/
    _count?: true | ProdukVarianCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProdukVarianAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProdukVarianSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProdukVarianMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProdukVarianMaxAggregateInputType;
};
export type GetProdukVarianAggregateType<T extends ProdukVarianAggregateArgs> = {
    [P in keyof T & keyof AggregateProdukVarian]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProdukVarian[P]> : Prisma.GetScalarType<T[P], AggregateProdukVarian[P]>;
};
export type ProdukVarianGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdukVarianWhereInput;
    orderBy?: Prisma.ProdukVarianOrderByWithAggregationInput | Prisma.ProdukVarianOrderByWithAggregationInput[];
    by: Prisma.ProdukVarianScalarFieldEnum[] | Prisma.ProdukVarianScalarFieldEnum;
    having?: Prisma.ProdukVarianScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProdukVarianCountAggregateInputType | true;
    _avg?: ProdukVarianAvgAggregateInputType;
    _sum?: ProdukVarianSumAggregateInputType;
    _min?: ProdukVarianMinAggregateInputType;
    _max?: ProdukVarianMaxAggregateInputType;
};
export type ProdukVarianGroupByOutputType = {
    id: number;
    produk_id: number;
    warna: string;
    ukuran: string;
    stok: number;
    gambar: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ProdukVarianCountAggregateOutputType | null;
    _avg: ProdukVarianAvgAggregateOutputType | null;
    _sum: ProdukVarianSumAggregateOutputType | null;
    _min: ProdukVarianMinAggregateOutputType | null;
    _max: ProdukVarianMaxAggregateOutputType | null;
};
type GetProdukVarianGroupByPayload<T extends ProdukVarianGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProdukVarianGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProdukVarianGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProdukVarianGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProdukVarianGroupByOutputType[P]>;
}>>;
export type ProdukVarianWhereInput = {
    AND?: Prisma.ProdukVarianWhereInput | Prisma.ProdukVarianWhereInput[];
    OR?: Prisma.ProdukVarianWhereInput[];
    NOT?: Prisma.ProdukVarianWhereInput | Prisma.ProdukVarianWhereInput[];
    id?: Prisma.IntFilter<"ProdukVarian"> | number;
    produk_id?: Prisma.IntFilter<"ProdukVarian"> | number;
    warna?: Prisma.StringFilter<"ProdukVarian"> | string;
    ukuran?: Prisma.StringFilter<"ProdukVarian"> | string;
    stok?: Prisma.IntFilter<"ProdukVarian"> | number;
    gambar?: Prisma.StringNullableFilter<"ProdukVarian"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ProdukVarian"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ProdukVarian"> | Date | string;
    produk?: Prisma.XOR<Prisma.ProdukScalarRelationFilter, Prisma.ProdukWhereInput>;
};
export type ProdukVarianOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    gambar?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    produk?: Prisma.ProdukOrderByWithRelationInput;
};
export type ProdukVarianWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    produk_id_warna_ukuran?: Prisma.ProdukVarianProduk_idWarnaUkuranCompoundUniqueInput;
    AND?: Prisma.ProdukVarianWhereInput | Prisma.ProdukVarianWhereInput[];
    OR?: Prisma.ProdukVarianWhereInput[];
    NOT?: Prisma.ProdukVarianWhereInput | Prisma.ProdukVarianWhereInput[];
    produk_id?: Prisma.IntFilter<"ProdukVarian"> | number;
    warna?: Prisma.StringFilter<"ProdukVarian"> | string;
    ukuran?: Prisma.StringFilter<"ProdukVarian"> | string;
    stok?: Prisma.IntFilter<"ProdukVarian"> | number;
    gambar?: Prisma.StringNullableFilter<"ProdukVarian"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ProdukVarian"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ProdukVarian"> | Date | string;
    produk?: Prisma.XOR<Prisma.ProdukScalarRelationFilter, Prisma.ProdukWhereInput>;
}, "id" | "produk_id_warna_ukuran">;
export type ProdukVarianOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    gambar?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ProdukVarianCountOrderByAggregateInput;
    _avg?: Prisma.ProdukVarianAvgOrderByAggregateInput;
    _max?: Prisma.ProdukVarianMaxOrderByAggregateInput;
    _min?: Prisma.ProdukVarianMinOrderByAggregateInput;
    _sum?: Prisma.ProdukVarianSumOrderByAggregateInput;
};
export type ProdukVarianScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProdukVarianScalarWhereWithAggregatesInput | Prisma.ProdukVarianScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProdukVarianScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProdukVarianScalarWhereWithAggregatesInput | Prisma.ProdukVarianScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProdukVarian"> | number;
    produk_id?: Prisma.IntWithAggregatesFilter<"ProdukVarian"> | number;
    warna?: Prisma.StringWithAggregatesFilter<"ProdukVarian"> | string;
    ukuran?: Prisma.StringWithAggregatesFilter<"ProdukVarian"> | string;
    stok?: Prisma.IntWithAggregatesFilter<"ProdukVarian"> | number;
    gambar?: Prisma.StringNullableWithAggregatesFilter<"ProdukVarian"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ProdukVarian"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"ProdukVarian"> | Date | string;
};
export type ProdukVarianCreateInput = {
    warna: string;
    ukuran: string;
    stok?: number;
    gambar?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    produk: Prisma.ProdukCreateNestedOneWithoutVarianInput;
};
export type ProdukVarianUncheckedCreateInput = {
    id?: number;
    produk_id: number;
    warna: string;
    ukuran: string;
    stok?: number;
    gambar?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdukVarianUpdateInput = {
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produk?: Prisma.ProdukUpdateOneRequiredWithoutVarianNestedInput;
};
export type ProdukVarianUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukVarianCreateManyInput = {
    id?: number;
    produk_id: number;
    warna: string;
    ukuran: string;
    stok?: number;
    gambar?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdukVarianUpdateManyMutationInput = {
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukVarianUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukVarianListRelationFilter = {
    every?: Prisma.ProdukVarianWhereInput;
    some?: Prisma.ProdukVarianWhereInput;
    none?: Prisma.ProdukVarianWhereInput;
};
export type ProdukVarianOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProdukVarianProduk_idWarnaUkuranCompoundUniqueInput = {
    produk_id: number;
    warna: string;
    ukuran: string;
};
export type ProdukVarianCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdukVarianAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
};
export type ProdukVarianMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdukVarianMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdukVarianSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
};
export type ProdukVarianCreateNestedManyWithoutProdukInput = {
    create?: Prisma.XOR<Prisma.ProdukVarianCreateWithoutProdukInput, Prisma.ProdukVarianUncheckedCreateWithoutProdukInput> | Prisma.ProdukVarianCreateWithoutProdukInput[] | Prisma.ProdukVarianUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.ProdukVarianCreateOrConnectWithoutProdukInput | Prisma.ProdukVarianCreateOrConnectWithoutProdukInput[];
    createMany?: Prisma.ProdukVarianCreateManyProdukInputEnvelope;
    connect?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
};
export type ProdukVarianUncheckedCreateNestedManyWithoutProdukInput = {
    create?: Prisma.XOR<Prisma.ProdukVarianCreateWithoutProdukInput, Prisma.ProdukVarianUncheckedCreateWithoutProdukInput> | Prisma.ProdukVarianCreateWithoutProdukInput[] | Prisma.ProdukVarianUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.ProdukVarianCreateOrConnectWithoutProdukInput | Prisma.ProdukVarianCreateOrConnectWithoutProdukInput[];
    createMany?: Prisma.ProdukVarianCreateManyProdukInputEnvelope;
    connect?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
};
export type ProdukVarianUpdateManyWithoutProdukNestedInput = {
    create?: Prisma.XOR<Prisma.ProdukVarianCreateWithoutProdukInput, Prisma.ProdukVarianUncheckedCreateWithoutProdukInput> | Prisma.ProdukVarianCreateWithoutProdukInput[] | Prisma.ProdukVarianUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.ProdukVarianCreateOrConnectWithoutProdukInput | Prisma.ProdukVarianCreateOrConnectWithoutProdukInput[];
    upsert?: Prisma.ProdukVarianUpsertWithWhereUniqueWithoutProdukInput | Prisma.ProdukVarianUpsertWithWhereUniqueWithoutProdukInput[];
    createMany?: Prisma.ProdukVarianCreateManyProdukInputEnvelope;
    set?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    disconnect?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    delete?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    connect?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    update?: Prisma.ProdukVarianUpdateWithWhereUniqueWithoutProdukInput | Prisma.ProdukVarianUpdateWithWhereUniqueWithoutProdukInput[];
    updateMany?: Prisma.ProdukVarianUpdateManyWithWhereWithoutProdukInput | Prisma.ProdukVarianUpdateManyWithWhereWithoutProdukInput[];
    deleteMany?: Prisma.ProdukVarianScalarWhereInput | Prisma.ProdukVarianScalarWhereInput[];
};
export type ProdukVarianUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: Prisma.XOR<Prisma.ProdukVarianCreateWithoutProdukInput, Prisma.ProdukVarianUncheckedCreateWithoutProdukInput> | Prisma.ProdukVarianCreateWithoutProdukInput[] | Prisma.ProdukVarianUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.ProdukVarianCreateOrConnectWithoutProdukInput | Prisma.ProdukVarianCreateOrConnectWithoutProdukInput[];
    upsert?: Prisma.ProdukVarianUpsertWithWhereUniqueWithoutProdukInput | Prisma.ProdukVarianUpsertWithWhereUniqueWithoutProdukInput[];
    createMany?: Prisma.ProdukVarianCreateManyProdukInputEnvelope;
    set?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    disconnect?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    delete?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    connect?: Prisma.ProdukVarianWhereUniqueInput | Prisma.ProdukVarianWhereUniqueInput[];
    update?: Prisma.ProdukVarianUpdateWithWhereUniqueWithoutProdukInput | Prisma.ProdukVarianUpdateWithWhereUniqueWithoutProdukInput[];
    updateMany?: Prisma.ProdukVarianUpdateManyWithWhereWithoutProdukInput | Prisma.ProdukVarianUpdateManyWithWhereWithoutProdukInput[];
    deleteMany?: Prisma.ProdukVarianScalarWhereInput | Prisma.ProdukVarianScalarWhereInput[];
};
export type ProdukVarianCreateWithoutProdukInput = {
    warna: string;
    ukuran: string;
    stok?: number;
    gambar?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdukVarianUncheckedCreateWithoutProdukInput = {
    id?: number;
    warna: string;
    ukuran: string;
    stok?: number;
    gambar?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdukVarianCreateOrConnectWithoutProdukInput = {
    where: Prisma.ProdukVarianWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdukVarianCreateWithoutProdukInput, Prisma.ProdukVarianUncheckedCreateWithoutProdukInput>;
};
export type ProdukVarianCreateManyProdukInputEnvelope = {
    data: Prisma.ProdukVarianCreateManyProdukInput | Prisma.ProdukVarianCreateManyProdukInput[];
    skipDuplicates?: boolean;
};
export type ProdukVarianUpsertWithWhereUniqueWithoutProdukInput = {
    where: Prisma.ProdukVarianWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProdukVarianUpdateWithoutProdukInput, Prisma.ProdukVarianUncheckedUpdateWithoutProdukInput>;
    create: Prisma.XOR<Prisma.ProdukVarianCreateWithoutProdukInput, Prisma.ProdukVarianUncheckedCreateWithoutProdukInput>;
};
export type ProdukVarianUpdateWithWhereUniqueWithoutProdukInput = {
    where: Prisma.ProdukVarianWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProdukVarianUpdateWithoutProdukInput, Prisma.ProdukVarianUncheckedUpdateWithoutProdukInput>;
};
export type ProdukVarianUpdateManyWithWhereWithoutProdukInput = {
    where: Prisma.ProdukVarianScalarWhereInput;
    data: Prisma.XOR<Prisma.ProdukVarianUpdateManyMutationInput, Prisma.ProdukVarianUncheckedUpdateManyWithoutProdukInput>;
};
export type ProdukVarianScalarWhereInput = {
    AND?: Prisma.ProdukVarianScalarWhereInput | Prisma.ProdukVarianScalarWhereInput[];
    OR?: Prisma.ProdukVarianScalarWhereInput[];
    NOT?: Prisma.ProdukVarianScalarWhereInput | Prisma.ProdukVarianScalarWhereInput[];
    id?: Prisma.IntFilter<"ProdukVarian"> | number;
    produk_id?: Prisma.IntFilter<"ProdukVarian"> | number;
    warna?: Prisma.StringFilter<"ProdukVarian"> | string;
    ukuran?: Prisma.StringFilter<"ProdukVarian"> | string;
    stok?: Prisma.IntFilter<"ProdukVarian"> | number;
    gambar?: Prisma.StringNullableFilter<"ProdukVarian"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ProdukVarian"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ProdukVarian"> | Date | string;
};
export type ProdukVarianCreateManyProdukInput = {
    id?: number;
    warna: string;
    ukuran: string;
    stok?: number;
    gambar?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdukVarianUpdateWithoutProdukInput = {
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukVarianUncheckedUpdateWithoutProdukInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukVarianUncheckedUpdateManyWithoutProdukInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    warna?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran?: Prisma.StringFieldUpdateOperationsInput | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukVarianSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    produk_id?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    stok?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produkVarian"]>;
export type ProdukVarianSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    produk_id?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    stok?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produkVarian"]>;
export type ProdukVarianSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    produk_id?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    stok?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produkVarian"]>;
export type ProdukVarianSelectScalar = {
    id?: boolean;
    produk_id?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    stok?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ProdukVarianOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "produk_id" | "warna" | "ukuran" | "stok" | "gambar" | "created_at" | "updated_at", ExtArgs["result"]["produkVarian"]>;
export type ProdukVarianInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type ProdukVarianIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type ProdukVarianIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type $ProdukVarianPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProdukVarian";
    objects: {
        produk: Prisma.$ProdukPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        produk_id: number;
        warna: string;
        ukuran: string;
        stok: number;
        gambar: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["produkVarian"]>;
    composites: {};
};
export type ProdukVarianGetPayload<S extends boolean | null | undefined | ProdukVarianDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload, S>;
export type ProdukVarianCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProdukVarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProdukVarianCountAggregateInputType | true;
};
export interface ProdukVarianDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProdukVarian'];
        meta: {
            name: 'ProdukVarian';
        };
    };
    /**
     * Find zero or one ProdukVarian that matches the filter.
     * @param {ProdukVarianFindUniqueArgs} args - Arguments to find a ProdukVarian
     * @example
     * // Get one ProdukVarian
     * const produkVarian = await prisma.produkVarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukVarianFindUniqueArgs>(args: Prisma.SelectSubset<T, ProdukVarianFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProdukVarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukVarianFindUniqueOrThrowArgs} args - Arguments to find a ProdukVarian
     * @example
     * // Get one ProdukVarian
     * const produkVarian = await prisma.produkVarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukVarianFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProdukVarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProdukVarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianFindFirstArgs} args - Arguments to find a ProdukVarian
     * @example
     * // Get one ProdukVarian
     * const produkVarian = await prisma.produkVarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukVarianFindFirstArgs>(args?: Prisma.SelectSubset<T, ProdukVarianFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProdukVarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianFindFirstOrThrowArgs} args - Arguments to find a ProdukVarian
     * @example
     * // Get one ProdukVarian
     * const produkVarian = await prisma.produkVarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukVarianFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProdukVarianFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProdukVarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdukVarians
     * const produkVarians = await prisma.produkVarian.findMany()
     *
     * // Get first 10 ProdukVarians
     * const produkVarians = await prisma.produkVarian.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const produkVarianWithIdOnly = await prisma.produkVarian.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProdukVarianFindManyArgs>(args?: Prisma.SelectSubset<T, ProdukVarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProdukVarian.
     * @param {ProdukVarianCreateArgs} args - Arguments to create a ProdukVarian.
     * @example
     * // Create one ProdukVarian
     * const ProdukVarian = await prisma.produkVarian.create({
     *   data: {
     *     // ... data to create a ProdukVarian
     *   }
     * })
     *
     */
    create<T extends ProdukVarianCreateArgs>(args: Prisma.SelectSubset<T, ProdukVarianCreateArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProdukVarians.
     * @param {ProdukVarianCreateManyArgs} args - Arguments to create many ProdukVarians.
     * @example
     * // Create many ProdukVarians
     * const produkVarian = await prisma.produkVarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProdukVarianCreateManyArgs>(args?: Prisma.SelectSubset<T, ProdukVarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProdukVarians and returns the data saved in the database.
     * @param {ProdukVarianCreateManyAndReturnArgs} args - Arguments to create many ProdukVarians.
     * @example
     * // Create many ProdukVarians
     * const produkVarian = await prisma.produkVarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProdukVarians and only return the `id`
     * const produkVarianWithIdOnly = await prisma.produkVarian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProdukVarianCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProdukVarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProdukVarian.
     * @param {ProdukVarianDeleteArgs} args - Arguments to delete one ProdukVarian.
     * @example
     * // Delete one ProdukVarian
     * const ProdukVarian = await prisma.produkVarian.delete({
     *   where: {
     *     // ... filter to delete one ProdukVarian
     *   }
     * })
     *
     */
    delete<T extends ProdukVarianDeleteArgs>(args: Prisma.SelectSubset<T, ProdukVarianDeleteArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProdukVarian.
     * @param {ProdukVarianUpdateArgs} args - Arguments to update one ProdukVarian.
     * @example
     * // Update one ProdukVarian
     * const produkVarian = await prisma.produkVarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProdukVarianUpdateArgs>(args: Prisma.SelectSubset<T, ProdukVarianUpdateArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProdukVarians.
     * @param {ProdukVarianDeleteManyArgs} args - Arguments to filter ProdukVarians to delete.
     * @example
     * // Delete a few ProdukVarians
     * const { count } = await prisma.produkVarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProdukVarianDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProdukVarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProdukVarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdukVarians
     * const produkVarian = await prisma.produkVarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProdukVarianUpdateManyArgs>(args: Prisma.SelectSubset<T, ProdukVarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProdukVarians and returns the data updated in the database.
     * @param {ProdukVarianUpdateManyAndReturnArgs} args - Arguments to update many ProdukVarians.
     * @example
     * // Update many ProdukVarians
     * const produkVarian = await prisma.produkVarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProdukVarians and only return the `id`
     * const produkVarianWithIdOnly = await prisma.produkVarian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProdukVarianUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProdukVarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProdukVarian.
     * @param {ProdukVarianUpsertArgs} args - Arguments to update or create a ProdukVarian.
     * @example
     * // Update or create a ProdukVarian
     * const produkVarian = await prisma.produkVarian.upsert({
     *   create: {
     *     // ... data to create a ProdukVarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdukVarian we want to update
     *   }
     * })
     */
    upsert<T extends ProdukVarianUpsertArgs>(args: Prisma.SelectSubset<T, ProdukVarianUpsertArgs<ExtArgs>>): Prisma.Prisma__ProdukVarianClient<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProdukVarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianCountArgs} args - Arguments to filter ProdukVarians to count.
     * @example
     * // Count the number of ProdukVarians
     * const count = await prisma.produkVarian.count({
     *   where: {
     *     // ... the filter for the ProdukVarians we want to count
     *   }
     * })
    **/
    count<T extends ProdukVarianCountArgs>(args?: Prisma.Subset<T, ProdukVarianCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProdukVarianCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProdukVarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdukVarianAggregateArgs>(args: Prisma.Subset<T, ProdukVarianAggregateArgs>): Prisma.PrismaPromise<GetProdukVarianAggregateType<T>>;
    /**
     * Group by ProdukVarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukVarianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ProdukVarianGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProdukVarianGroupByArgs['orderBy'];
    } : {
        orderBy?: ProdukVarianGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProdukVarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukVarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProdukVarian model
     */
    readonly fields: ProdukVarianFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProdukVarian.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProdukVarianClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    produk<T extends Prisma.ProdukDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdukDefaultArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ProdukVarian model
 */
export interface ProdukVarianFieldRefs {
    readonly id: Prisma.FieldRef<"ProdukVarian", 'Int'>;
    readonly produk_id: Prisma.FieldRef<"ProdukVarian", 'Int'>;
    readonly warna: Prisma.FieldRef<"ProdukVarian", 'String'>;
    readonly ukuran: Prisma.FieldRef<"ProdukVarian", 'String'>;
    readonly stok: Prisma.FieldRef<"ProdukVarian", 'Int'>;
    readonly gambar: Prisma.FieldRef<"ProdukVarian", 'String'>;
    readonly created_at: Prisma.FieldRef<"ProdukVarian", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"ProdukVarian", 'DateTime'>;
}
/**
 * ProdukVarian findUnique
 */
export type ProdukVarianFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * Filter, which ProdukVarian to fetch.
     */
    where: Prisma.ProdukVarianWhereUniqueInput;
};
/**
 * ProdukVarian findUniqueOrThrow
 */
export type ProdukVarianFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * Filter, which ProdukVarian to fetch.
     */
    where: Prisma.ProdukVarianWhereUniqueInput;
};
/**
 * ProdukVarian findFirst
 */
export type ProdukVarianFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * Filter, which ProdukVarian to fetch.
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdukVarians to fetch.
     */
    orderBy?: Prisma.ProdukVarianOrderByWithRelationInput | Prisma.ProdukVarianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProdukVarians.
     */
    cursor?: Prisma.ProdukVarianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdukVarians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdukVarians.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProdukVarians.
     */
    distinct?: Prisma.ProdukVarianScalarFieldEnum | Prisma.ProdukVarianScalarFieldEnum[];
};
/**
 * ProdukVarian findFirstOrThrow
 */
export type ProdukVarianFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * Filter, which ProdukVarian to fetch.
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdukVarians to fetch.
     */
    orderBy?: Prisma.ProdukVarianOrderByWithRelationInput | Prisma.ProdukVarianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProdukVarians.
     */
    cursor?: Prisma.ProdukVarianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdukVarians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdukVarians.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProdukVarians.
     */
    distinct?: Prisma.ProdukVarianScalarFieldEnum | Prisma.ProdukVarianScalarFieldEnum[];
};
/**
 * ProdukVarian findMany
 */
export type ProdukVarianFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * Filter, which ProdukVarians to fetch.
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdukVarians to fetch.
     */
    orderBy?: Prisma.ProdukVarianOrderByWithRelationInput | Prisma.ProdukVarianOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProdukVarians.
     */
    cursor?: Prisma.ProdukVarianWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdukVarians from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdukVarians.
     */
    skip?: number;
    distinct?: Prisma.ProdukVarianScalarFieldEnum | Prisma.ProdukVarianScalarFieldEnum[];
};
/**
 * ProdukVarian create
 */
export type ProdukVarianCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProdukVarian.
     */
    data: Prisma.XOR<Prisma.ProdukVarianCreateInput, Prisma.ProdukVarianUncheckedCreateInput>;
};
/**
 * ProdukVarian createMany
 */
export type ProdukVarianCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdukVarians.
     */
    data: Prisma.ProdukVarianCreateManyInput | Prisma.ProdukVarianCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProdukVarian createManyAndReturn
 */
export type ProdukVarianCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * The data used to create many ProdukVarians.
     */
    data: Prisma.ProdukVarianCreateManyInput | Prisma.ProdukVarianCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProdukVarian update
 */
export type ProdukVarianUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProdukVarian.
     */
    data: Prisma.XOR<Prisma.ProdukVarianUpdateInput, Prisma.ProdukVarianUncheckedUpdateInput>;
    /**
     * Choose, which ProdukVarian to update.
     */
    where: Prisma.ProdukVarianWhereUniqueInput;
};
/**
 * ProdukVarian updateMany
 */
export type ProdukVarianUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdukVarians.
     */
    data: Prisma.XOR<Prisma.ProdukVarianUpdateManyMutationInput, Prisma.ProdukVarianUncheckedUpdateManyInput>;
    /**
     * Filter which ProdukVarians to update
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * Limit how many ProdukVarians to update.
     */
    limit?: number;
};
/**
 * ProdukVarian updateManyAndReturn
 */
export type ProdukVarianUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * The data used to update ProdukVarians.
     */
    data: Prisma.XOR<Prisma.ProdukVarianUpdateManyMutationInput, Prisma.ProdukVarianUncheckedUpdateManyInput>;
    /**
     * Filter which ProdukVarians to update
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * Limit how many ProdukVarians to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProdukVarian upsert
 */
export type ProdukVarianUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProdukVarian to update in case it exists.
     */
    where: Prisma.ProdukVarianWhereUniqueInput;
    /**
     * In case the ProdukVarian found by the `where` argument doesn't exist, create a new ProdukVarian with this data.
     */
    create: Prisma.XOR<Prisma.ProdukVarianCreateInput, Prisma.ProdukVarianUncheckedCreateInput>;
    /**
     * In case the ProdukVarian was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProdukVarianUpdateInput, Prisma.ProdukVarianUncheckedUpdateInput>;
};
/**
 * ProdukVarian delete
 */
export type ProdukVarianDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
    /**
     * Filter which ProdukVarian to delete.
     */
    where: Prisma.ProdukVarianWhereUniqueInput;
};
/**
 * ProdukVarian deleteMany
 */
export type ProdukVarianDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProdukVarians to delete
     */
    where?: Prisma.ProdukVarianWhereInput;
    /**
     * Limit how many ProdukVarians to delete.
     */
    limit?: number;
};
/**
 * ProdukVarian without action
 */
export type ProdukVarianDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukVarian
     */
    select?: Prisma.ProdukVarianSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdukVarian
     */
    omit?: Prisma.ProdukVarianOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukVarianInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProdukVarian.d.ts.map