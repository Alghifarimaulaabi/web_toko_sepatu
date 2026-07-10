import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Testimoni
 *
 */
export type TestimoniModel = runtime.Types.Result.DefaultSelection<Prisma.$TestimoniPayload>;
export type AggregateTestimoni = {
    _count: TestimoniCountAggregateOutputType | null;
    _avg: TestimoniAvgAggregateOutputType | null;
    _sum: TestimoniSumAggregateOutputType | null;
    _min: TestimoniMinAggregateOutputType | null;
    _max: TestimoniMaxAggregateOutputType | null;
};
export type TestimoniAvgAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    user_id: number | null;
    produk_id: number | null;
    rating: number | null;
};
export type TestimoniSumAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    user_id: number | null;
    produk_id: number | null;
    rating: number | null;
};
export type TestimoniMinAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    user_id: number | null;
    produk_id: number | null;
    nama: string | null;
    rating: number | null;
    komentar: string | null;
    gambar: string | null;
    balasan: string | null;
    created_at: Date | null;
};
export type TestimoniMaxAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    user_id: number | null;
    produk_id: number | null;
    nama: string | null;
    rating: number | null;
    komentar: string | null;
    gambar: string | null;
    balasan: string | null;
    created_at: Date | null;
};
export type TestimoniCountAggregateOutputType = {
    id: number;
    pesanan_id: number;
    user_id: number;
    produk_id: number;
    nama: number;
    rating: number;
    komentar: number;
    gambar: number;
    balasan: number;
    created_at: number;
    _all: number;
};
export type TestimoniAvgAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    user_id?: true;
    produk_id?: true;
    rating?: true;
};
export type TestimoniSumAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    user_id?: true;
    produk_id?: true;
    rating?: true;
};
export type TestimoniMinAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    user_id?: true;
    produk_id?: true;
    nama?: true;
    rating?: true;
    komentar?: true;
    gambar?: true;
    balasan?: true;
    created_at?: true;
};
export type TestimoniMaxAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    user_id?: true;
    produk_id?: true;
    nama?: true;
    rating?: true;
    komentar?: true;
    gambar?: true;
    balasan?: true;
    created_at?: true;
};
export type TestimoniCountAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    user_id?: true;
    produk_id?: true;
    nama?: true;
    rating?: true;
    komentar?: true;
    gambar?: true;
    balasan?: true;
    created_at?: true;
    _all?: true;
};
export type TestimoniAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Testimoni to aggregate.
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Testimonis to fetch.
     */
    orderBy?: Prisma.TestimoniOrderByWithRelationInput | Prisma.TestimoniOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TestimoniWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Testimonis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Testimonis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Testimonis
    **/
    _count?: true | TestimoniCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TestimoniAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TestimoniSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TestimoniMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TestimoniMaxAggregateInputType;
};
export type GetTestimoniAggregateType<T extends TestimoniAggregateArgs> = {
    [P in keyof T & keyof AggregateTestimoni]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestimoni[P]> : Prisma.GetScalarType<T[P], AggregateTestimoni[P]>;
};
export type TestimoniGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimoniWhereInput;
    orderBy?: Prisma.TestimoniOrderByWithAggregationInput | Prisma.TestimoniOrderByWithAggregationInput[];
    by: Prisma.TestimoniScalarFieldEnum[] | Prisma.TestimoniScalarFieldEnum;
    having?: Prisma.TestimoniScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestimoniCountAggregateInputType | true;
    _avg?: TestimoniAvgAggregateInputType;
    _sum?: TestimoniSumAggregateInputType;
    _min?: TestimoniMinAggregateInputType;
    _max?: TestimoniMaxAggregateInputType;
};
export type TestimoniGroupByOutputType = {
    id: number;
    pesanan_id: number;
    user_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar: string | null;
    balasan: string | null;
    created_at: Date;
    _count: TestimoniCountAggregateOutputType | null;
    _avg: TestimoniAvgAggregateOutputType | null;
    _sum: TestimoniSumAggregateOutputType | null;
    _min: TestimoniMinAggregateOutputType | null;
    _max: TestimoniMaxAggregateOutputType | null;
};
type GetTestimoniGroupByPayload<T extends TestimoniGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestimoniGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestimoniGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestimoniGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestimoniGroupByOutputType[P]>;
}>>;
export type TestimoniWhereInput = {
    AND?: Prisma.TestimoniWhereInput | Prisma.TestimoniWhereInput[];
    OR?: Prisma.TestimoniWhereInput[];
    NOT?: Prisma.TestimoniWhereInput | Prisma.TestimoniWhereInput[];
    id?: Prisma.IntFilter<"Testimoni"> | number;
    pesanan_id?: Prisma.IntFilter<"Testimoni"> | number;
    user_id?: Prisma.IntFilter<"Testimoni"> | number;
    produk_id?: Prisma.IntFilter<"Testimoni"> | number;
    nama?: Prisma.StringFilter<"Testimoni"> | string;
    rating?: Prisma.IntFilter<"Testimoni"> | number;
    komentar?: Prisma.StringFilter<"Testimoni"> | string;
    gambar?: Prisma.StringNullableFilter<"Testimoni"> | string | null;
    balasan?: Prisma.StringNullableFilter<"Testimoni"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Testimoni"> | Date | string;
    pesanan?: Prisma.XOR<Prisma.PesananScalarRelationFilter, Prisma.PesananWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    produk?: Prisma.XOR<Prisma.ProdukScalarRelationFilter, Prisma.ProdukWhereInput>;
};
export type TestimoniOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    komentar?: Prisma.SortOrder;
    gambar?: Prisma.SortOrderInput | Prisma.SortOrder;
    balasan?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    pesanan?: Prisma.PesananOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    produk?: Prisma.ProdukOrderByWithRelationInput;
};
export type TestimoniWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    user_id_produk_id_pesanan_id?: Prisma.TestimoniUser_idProduk_idPesanan_idCompoundUniqueInput;
    AND?: Prisma.TestimoniWhereInput | Prisma.TestimoniWhereInput[];
    OR?: Prisma.TestimoniWhereInput[];
    NOT?: Prisma.TestimoniWhereInput | Prisma.TestimoniWhereInput[];
    pesanan_id?: Prisma.IntFilter<"Testimoni"> | number;
    user_id?: Prisma.IntFilter<"Testimoni"> | number;
    produk_id?: Prisma.IntFilter<"Testimoni"> | number;
    nama?: Prisma.StringFilter<"Testimoni"> | string;
    rating?: Prisma.IntFilter<"Testimoni"> | number;
    komentar?: Prisma.StringFilter<"Testimoni"> | string;
    gambar?: Prisma.StringNullableFilter<"Testimoni"> | string | null;
    balasan?: Prisma.StringNullableFilter<"Testimoni"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Testimoni"> | Date | string;
    pesanan?: Prisma.XOR<Prisma.PesananScalarRelationFilter, Prisma.PesananWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    produk?: Prisma.XOR<Prisma.ProdukScalarRelationFilter, Prisma.ProdukWhereInput>;
}, "id" | "user_id_produk_id_pesanan_id">;
export type TestimoniOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    komentar?: Prisma.SortOrder;
    gambar?: Prisma.SortOrderInput | Prisma.SortOrder;
    balasan?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.TestimoniCountOrderByAggregateInput;
    _avg?: Prisma.TestimoniAvgOrderByAggregateInput;
    _max?: Prisma.TestimoniMaxOrderByAggregateInput;
    _min?: Prisma.TestimoniMinOrderByAggregateInput;
    _sum?: Prisma.TestimoniSumOrderByAggregateInput;
};
export type TestimoniScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestimoniScalarWhereWithAggregatesInput | Prisma.TestimoniScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestimoniScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestimoniScalarWhereWithAggregatesInput | Prisma.TestimoniScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Testimoni"> | number;
    pesanan_id?: Prisma.IntWithAggregatesFilter<"Testimoni"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"Testimoni"> | number;
    produk_id?: Prisma.IntWithAggregatesFilter<"Testimoni"> | number;
    nama?: Prisma.StringWithAggregatesFilter<"Testimoni"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"Testimoni"> | number;
    komentar?: Prisma.StringWithAggregatesFilter<"Testimoni"> | string;
    gambar?: Prisma.StringNullableWithAggregatesFilter<"Testimoni"> | string | null;
    balasan?: Prisma.StringNullableWithAggregatesFilter<"Testimoni"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Testimoni"> | Date | string;
};
export type TestimoniCreateInput = {
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
    pesanan: Prisma.PesananCreateNestedOneWithoutTestimoniInput;
    user: Prisma.UserCreateNestedOneWithoutTestimoniInput;
    produk: Prisma.ProdukCreateNestedOneWithoutTestimoniInput;
};
export type TestimoniUncheckedCreateInput = {
    id?: number;
    pesanan_id: number;
    user_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniUpdateInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pesanan?: Prisma.PesananUpdateOneRequiredWithoutTestimoniNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTestimoniNestedInput;
    produk?: Prisma.ProdukUpdateOneRequiredWithoutTestimoniNestedInput;
};
export type TestimoniUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniCreateManyInput = {
    id?: number;
    pesanan_id: number;
    user_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniUpdateManyMutationInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniListRelationFilter = {
    every?: Prisma.TestimoniWhereInput;
    some?: Prisma.TestimoniWhereInput;
    none?: Prisma.TestimoniWhereInput;
};
export type TestimoniOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TestimoniUser_idProduk_idPesanan_idCompoundUniqueInput = {
    user_id: number;
    produk_id: number;
    pesanan_id: number;
};
export type TestimoniCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    komentar?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    balasan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type TestimoniAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TestimoniMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    komentar?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    balasan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type TestimoniMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    komentar?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    balasan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type TestimoniSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TestimoniCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutUserInput, Prisma.TestimoniUncheckedCreateWithoutUserInput> | Prisma.TestimoniCreateWithoutUserInput[] | Prisma.TestimoniUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutUserInput | Prisma.TestimoniCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TestimoniCreateManyUserInputEnvelope;
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
};
export type TestimoniUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutUserInput, Prisma.TestimoniUncheckedCreateWithoutUserInput> | Prisma.TestimoniCreateWithoutUserInput[] | Prisma.TestimoniUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutUserInput | Prisma.TestimoniCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TestimoniCreateManyUserInputEnvelope;
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
};
export type TestimoniUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutUserInput, Prisma.TestimoniUncheckedCreateWithoutUserInput> | Prisma.TestimoniCreateWithoutUserInput[] | Prisma.TestimoniUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutUserInput | Prisma.TestimoniCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TestimoniUpsertWithWhereUniqueWithoutUserInput | Prisma.TestimoniUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TestimoniCreateManyUserInputEnvelope;
    set?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    disconnect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    delete?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    update?: Prisma.TestimoniUpdateWithWhereUniqueWithoutUserInput | Prisma.TestimoniUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TestimoniUpdateManyWithWhereWithoutUserInput | Prisma.TestimoniUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
};
export type TestimoniUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutUserInput, Prisma.TestimoniUncheckedCreateWithoutUserInput> | Prisma.TestimoniCreateWithoutUserInput[] | Prisma.TestimoniUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutUserInput | Prisma.TestimoniCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TestimoniUpsertWithWhereUniqueWithoutUserInput | Prisma.TestimoniUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TestimoniCreateManyUserInputEnvelope;
    set?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    disconnect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    delete?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    update?: Prisma.TestimoniUpdateWithWhereUniqueWithoutUserInput | Prisma.TestimoniUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TestimoniUpdateManyWithWhereWithoutUserInput | Prisma.TestimoniUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
};
export type TestimoniCreateNestedManyWithoutProdukInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutProdukInput, Prisma.TestimoniUncheckedCreateWithoutProdukInput> | Prisma.TestimoniCreateWithoutProdukInput[] | Prisma.TestimoniUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutProdukInput | Prisma.TestimoniCreateOrConnectWithoutProdukInput[];
    createMany?: Prisma.TestimoniCreateManyProdukInputEnvelope;
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
};
export type TestimoniUncheckedCreateNestedManyWithoutProdukInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutProdukInput, Prisma.TestimoniUncheckedCreateWithoutProdukInput> | Prisma.TestimoniCreateWithoutProdukInput[] | Prisma.TestimoniUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutProdukInput | Prisma.TestimoniCreateOrConnectWithoutProdukInput[];
    createMany?: Prisma.TestimoniCreateManyProdukInputEnvelope;
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
};
export type TestimoniUpdateManyWithoutProdukNestedInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutProdukInput, Prisma.TestimoniUncheckedCreateWithoutProdukInput> | Prisma.TestimoniCreateWithoutProdukInput[] | Prisma.TestimoniUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutProdukInput | Prisma.TestimoniCreateOrConnectWithoutProdukInput[];
    upsert?: Prisma.TestimoniUpsertWithWhereUniqueWithoutProdukInput | Prisma.TestimoniUpsertWithWhereUniqueWithoutProdukInput[];
    createMany?: Prisma.TestimoniCreateManyProdukInputEnvelope;
    set?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    disconnect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    delete?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    update?: Prisma.TestimoniUpdateWithWhereUniqueWithoutProdukInput | Prisma.TestimoniUpdateWithWhereUniqueWithoutProdukInput[];
    updateMany?: Prisma.TestimoniUpdateManyWithWhereWithoutProdukInput | Prisma.TestimoniUpdateManyWithWhereWithoutProdukInput[];
    deleteMany?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
};
export type TestimoniUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutProdukInput, Prisma.TestimoniUncheckedCreateWithoutProdukInput> | Prisma.TestimoniCreateWithoutProdukInput[] | Prisma.TestimoniUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutProdukInput | Prisma.TestimoniCreateOrConnectWithoutProdukInput[];
    upsert?: Prisma.TestimoniUpsertWithWhereUniqueWithoutProdukInput | Prisma.TestimoniUpsertWithWhereUniqueWithoutProdukInput[];
    createMany?: Prisma.TestimoniCreateManyProdukInputEnvelope;
    set?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    disconnect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    delete?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    update?: Prisma.TestimoniUpdateWithWhereUniqueWithoutProdukInput | Prisma.TestimoniUpdateWithWhereUniqueWithoutProdukInput[];
    updateMany?: Prisma.TestimoniUpdateManyWithWhereWithoutProdukInput | Prisma.TestimoniUpdateManyWithWhereWithoutProdukInput[];
    deleteMany?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
};
export type TestimoniCreateNestedManyWithoutPesananInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutPesananInput, Prisma.TestimoniUncheckedCreateWithoutPesananInput> | Prisma.TestimoniCreateWithoutPesananInput[] | Prisma.TestimoniUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutPesananInput | Prisma.TestimoniCreateOrConnectWithoutPesananInput[];
    createMany?: Prisma.TestimoniCreateManyPesananInputEnvelope;
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
};
export type TestimoniUncheckedCreateNestedManyWithoutPesananInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutPesananInput, Prisma.TestimoniUncheckedCreateWithoutPesananInput> | Prisma.TestimoniCreateWithoutPesananInput[] | Prisma.TestimoniUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutPesananInput | Prisma.TestimoniCreateOrConnectWithoutPesananInput[];
    createMany?: Prisma.TestimoniCreateManyPesananInputEnvelope;
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
};
export type TestimoniUpdateManyWithoutPesananNestedInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutPesananInput, Prisma.TestimoniUncheckedCreateWithoutPesananInput> | Prisma.TestimoniCreateWithoutPesananInput[] | Prisma.TestimoniUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutPesananInput | Prisma.TestimoniCreateOrConnectWithoutPesananInput[];
    upsert?: Prisma.TestimoniUpsertWithWhereUniqueWithoutPesananInput | Prisma.TestimoniUpsertWithWhereUniqueWithoutPesananInput[];
    createMany?: Prisma.TestimoniCreateManyPesananInputEnvelope;
    set?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    disconnect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    delete?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    update?: Prisma.TestimoniUpdateWithWhereUniqueWithoutPesananInput | Prisma.TestimoniUpdateWithWhereUniqueWithoutPesananInput[];
    updateMany?: Prisma.TestimoniUpdateManyWithWhereWithoutPesananInput | Prisma.TestimoniUpdateManyWithWhereWithoutPesananInput[];
    deleteMany?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
};
export type TestimoniUncheckedUpdateManyWithoutPesananNestedInput = {
    create?: Prisma.XOR<Prisma.TestimoniCreateWithoutPesananInput, Prisma.TestimoniUncheckedCreateWithoutPesananInput> | Prisma.TestimoniCreateWithoutPesananInput[] | Prisma.TestimoniUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.TestimoniCreateOrConnectWithoutPesananInput | Prisma.TestimoniCreateOrConnectWithoutPesananInput[];
    upsert?: Prisma.TestimoniUpsertWithWhereUniqueWithoutPesananInput | Prisma.TestimoniUpsertWithWhereUniqueWithoutPesananInput[];
    createMany?: Prisma.TestimoniCreateManyPesananInputEnvelope;
    set?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    disconnect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    delete?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    connect?: Prisma.TestimoniWhereUniqueInput | Prisma.TestimoniWhereUniqueInput[];
    update?: Prisma.TestimoniUpdateWithWhereUniqueWithoutPesananInput | Prisma.TestimoniUpdateWithWhereUniqueWithoutPesananInput[];
    updateMany?: Prisma.TestimoniUpdateManyWithWhereWithoutPesananInput | Prisma.TestimoniUpdateManyWithWhereWithoutPesananInput[];
    deleteMany?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
};
export type TestimoniCreateWithoutUserInput = {
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
    pesanan: Prisma.PesananCreateNestedOneWithoutTestimoniInput;
    produk: Prisma.ProdukCreateNestedOneWithoutTestimoniInput;
};
export type TestimoniUncheckedCreateWithoutUserInput = {
    id?: number;
    pesanan_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniCreateOrConnectWithoutUserInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimoniCreateWithoutUserInput, Prisma.TestimoniUncheckedCreateWithoutUserInput>;
};
export type TestimoniCreateManyUserInputEnvelope = {
    data: Prisma.TestimoniCreateManyUserInput | Prisma.TestimoniCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TestimoniUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestimoniUpdateWithoutUserInput, Prisma.TestimoniUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TestimoniCreateWithoutUserInput, Prisma.TestimoniUncheckedCreateWithoutUserInput>;
};
export type TestimoniUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestimoniUpdateWithoutUserInput, Prisma.TestimoniUncheckedUpdateWithoutUserInput>;
};
export type TestimoniUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TestimoniScalarWhereInput;
    data: Prisma.XOR<Prisma.TestimoniUpdateManyMutationInput, Prisma.TestimoniUncheckedUpdateManyWithoutUserInput>;
};
export type TestimoniScalarWhereInput = {
    AND?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
    OR?: Prisma.TestimoniScalarWhereInput[];
    NOT?: Prisma.TestimoniScalarWhereInput | Prisma.TestimoniScalarWhereInput[];
    id?: Prisma.IntFilter<"Testimoni"> | number;
    pesanan_id?: Prisma.IntFilter<"Testimoni"> | number;
    user_id?: Prisma.IntFilter<"Testimoni"> | number;
    produk_id?: Prisma.IntFilter<"Testimoni"> | number;
    nama?: Prisma.StringFilter<"Testimoni"> | string;
    rating?: Prisma.IntFilter<"Testimoni"> | number;
    komentar?: Prisma.StringFilter<"Testimoni"> | string;
    gambar?: Prisma.StringNullableFilter<"Testimoni"> | string | null;
    balasan?: Prisma.StringNullableFilter<"Testimoni"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Testimoni"> | Date | string;
};
export type TestimoniCreateWithoutProdukInput = {
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
    pesanan: Prisma.PesananCreateNestedOneWithoutTestimoniInput;
    user: Prisma.UserCreateNestedOneWithoutTestimoniInput;
};
export type TestimoniUncheckedCreateWithoutProdukInput = {
    id?: number;
    pesanan_id: number;
    user_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniCreateOrConnectWithoutProdukInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimoniCreateWithoutProdukInput, Prisma.TestimoniUncheckedCreateWithoutProdukInput>;
};
export type TestimoniCreateManyProdukInputEnvelope = {
    data: Prisma.TestimoniCreateManyProdukInput | Prisma.TestimoniCreateManyProdukInput[];
    skipDuplicates?: boolean;
};
export type TestimoniUpsertWithWhereUniqueWithoutProdukInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestimoniUpdateWithoutProdukInput, Prisma.TestimoniUncheckedUpdateWithoutProdukInput>;
    create: Prisma.XOR<Prisma.TestimoniCreateWithoutProdukInput, Prisma.TestimoniUncheckedCreateWithoutProdukInput>;
};
export type TestimoniUpdateWithWhereUniqueWithoutProdukInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestimoniUpdateWithoutProdukInput, Prisma.TestimoniUncheckedUpdateWithoutProdukInput>;
};
export type TestimoniUpdateManyWithWhereWithoutProdukInput = {
    where: Prisma.TestimoniScalarWhereInput;
    data: Prisma.XOR<Prisma.TestimoniUpdateManyMutationInput, Prisma.TestimoniUncheckedUpdateManyWithoutProdukInput>;
};
export type TestimoniCreateWithoutPesananInput = {
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTestimoniInput;
    produk: Prisma.ProdukCreateNestedOneWithoutTestimoniInput;
};
export type TestimoniUncheckedCreateWithoutPesananInput = {
    id?: number;
    user_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniCreateOrConnectWithoutPesananInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimoniCreateWithoutPesananInput, Prisma.TestimoniUncheckedCreateWithoutPesananInput>;
};
export type TestimoniCreateManyPesananInputEnvelope = {
    data: Prisma.TestimoniCreateManyPesananInput | Prisma.TestimoniCreateManyPesananInput[];
    skipDuplicates?: boolean;
};
export type TestimoniUpsertWithWhereUniqueWithoutPesananInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestimoniUpdateWithoutPesananInput, Prisma.TestimoniUncheckedUpdateWithoutPesananInput>;
    create: Prisma.XOR<Prisma.TestimoniCreateWithoutPesananInput, Prisma.TestimoniUncheckedCreateWithoutPesananInput>;
};
export type TestimoniUpdateWithWhereUniqueWithoutPesananInput = {
    where: Prisma.TestimoniWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestimoniUpdateWithoutPesananInput, Prisma.TestimoniUncheckedUpdateWithoutPesananInput>;
};
export type TestimoniUpdateManyWithWhereWithoutPesananInput = {
    where: Prisma.TestimoniScalarWhereInput;
    data: Prisma.XOR<Prisma.TestimoniUpdateManyMutationInput, Prisma.TestimoniUncheckedUpdateManyWithoutPesananInput>;
};
export type TestimoniCreateManyUserInput = {
    id?: number;
    pesanan_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniUpdateWithoutUserInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pesanan?: Prisma.PesananUpdateOneRequiredWithoutTestimoniNestedInput;
    produk?: Prisma.ProdukUpdateOneRequiredWithoutTestimoniNestedInput;
};
export type TestimoniUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniCreateManyProdukInput = {
    id?: number;
    pesanan_id: number;
    user_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniUpdateWithoutProdukInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pesanan?: Prisma.PesananUpdateOneRequiredWithoutTestimoniNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTestimoniNestedInput;
};
export type TestimoniUncheckedUpdateWithoutProdukInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniUncheckedUpdateManyWithoutProdukInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniCreateManyPesananInput = {
    id?: number;
    user_id: number;
    produk_id: number;
    nama: string;
    rating: number;
    komentar: string;
    gambar?: string | null;
    balasan?: string | null;
    created_at?: Date | string;
};
export type TestimoniUpdateWithoutPesananInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTestimoniNestedInput;
    produk?: Prisma.ProdukUpdateOneRequiredWithoutTestimoniNestedInput;
};
export type TestimoniUncheckedUpdateWithoutPesananInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniUncheckedUpdateManyWithoutPesananInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    komentar?: Prisma.StringFieldUpdateOperationsInput | string;
    gambar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balasan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimoniSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pesanan_id?: boolean;
    user_id?: boolean;
    produk_id?: boolean;
    nama?: boolean;
    rating?: boolean;
    komentar?: boolean;
    gambar?: boolean;
    balasan?: boolean;
    created_at?: boolean;
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testimoni"]>;
export type TestimoniSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pesanan_id?: boolean;
    user_id?: boolean;
    produk_id?: boolean;
    nama?: boolean;
    rating?: boolean;
    komentar?: boolean;
    gambar?: boolean;
    balasan?: boolean;
    created_at?: boolean;
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testimoni"]>;
export type TestimoniSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pesanan_id?: boolean;
    user_id?: boolean;
    produk_id?: boolean;
    nama?: boolean;
    rating?: boolean;
    komentar?: boolean;
    gambar?: boolean;
    balasan?: boolean;
    created_at?: boolean;
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testimoni"]>;
export type TestimoniSelectScalar = {
    id?: boolean;
    pesanan_id?: boolean;
    user_id?: boolean;
    produk_id?: boolean;
    nama?: boolean;
    rating?: boolean;
    komentar?: boolean;
    gambar?: boolean;
    balasan?: boolean;
    created_at?: boolean;
};
export type TestimoniOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pesanan_id" | "user_id" | "produk_id" | "nama" | "rating" | "komentar" | "gambar" | "balasan" | "created_at", ExtArgs["result"]["testimoni"]>;
export type TestimoniInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type TestimoniIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type TestimoniIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type $TestimoniPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Testimoni";
    objects: {
        pesanan: Prisma.$PesananPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        produk: Prisma.$ProdukPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pesanan_id: number;
        user_id: number;
        produk_id: number;
        nama: string;
        rating: number;
        komentar: string;
        gambar: string | null;
        balasan: string | null;
        created_at: Date;
    }, ExtArgs["result"]["testimoni"]>;
    composites: {};
};
export type TestimoniGetPayload<S extends boolean | null | undefined | TestimoniDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestimoniPayload, S>;
export type TestimoniCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestimoniFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestimoniCountAggregateInputType | true;
};
export interface TestimoniDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Testimoni'];
        meta: {
            name: 'Testimoni';
        };
    };
    /**
     * Find zero or one Testimoni that matches the filter.
     * @param {TestimoniFindUniqueArgs} args - Arguments to find a Testimoni
     * @example
     * // Get one Testimoni
     * const testimoni = await prisma.testimoni.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimoniFindUniqueArgs>(args: Prisma.SelectSubset<T, TestimoniFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Testimoni that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimoniFindUniqueOrThrowArgs} args - Arguments to find a Testimoni
     * @example
     * // Get one Testimoni
     * const testimoni = await prisma.testimoni.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimoniFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestimoniFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Testimoni that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniFindFirstArgs} args - Arguments to find a Testimoni
     * @example
     * // Get one Testimoni
     * const testimoni = await prisma.testimoni.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimoniFindFirstArgs>(args?: Prisma.SelectSubset<T, TestimoniFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Testimoni that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniFindFirstOrThrowArgs} args - Arguments to find a Testimoni
     * @example
     * // Get one Testimoni
     * const testimoni = await prisma.testimoni.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimoniFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestimoniFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Testimonis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonis
     * const testimonis = await prisma.testimoni.findMany()
     *
     * // Get first 10 Testimonis
     * const testimonis = await prisma.testimoni.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const testimoniWithIdOnly = await prisma.testimoni.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TestimoniFindManyArgs>(args?: Prisma.SelectSubset<T, TestimoniFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Testimoni.
     * @param {TestimoniCreateArgs} args - Arguments to create a Testimoni.
     * @example
     * // Create one Testimoni
     * const Testimoni = await prisma.testimoni.create({
     *   data: {
     *     // ... data to create a Testimoni
     *   }
     * })
     *
     */
    create<T extends TestimoniCreateArgs>(args: Prisma.SelectSubset<T, TestimoniCreateArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Testimonis.
     * @param {TestimoniCreateManyArgs} args - Arguments to create many Testimonis.
     * @example
     * // Create many Testimonis
     * const testimoni = await prisma.testimoni.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TestimoniCreateManyArgs>(args?: Prisma.SelectSubset<T, TestimoniCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Testimonis and returns the data saved in the database.
     * @param {TestimoniCreateManyAndReturnArgs} args - Arguments to create many Testimonis.
     * @example
     * // Create many Testimonis
     * const testimoni = await prisma.testimoni.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Testimonis and only return the `id`
     * const testimoniWithIdOnly = await prisma.testimoni.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TestimoniCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestimoniCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Testimoni.
     * @param {TestimoniDeleteArgs} args - Arguments to delete one Testimoni.
     * @example
     * // Delete one Testimoni
     * const Testimoni = await prisma.testimoni.delete({
     *   where: {
     *     // ... filter to delete one Testimoni
     *   }
     * })
     *
     */
    delete<T extends TestimoniDeleteArgs>(args: Prisma.SelectSubset<T, TestimoniDeleteArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Testimoni.
     * @param {TestimoniUpdateArgs} args - Arguments to update one Testimoni.
     * @example
     * // Update one Testimoni
     * const testimoni = await prisma.testimoni.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TestimoniUpdateArgs>(args: Prisma.SelectSubset<T, TestimoniUpdateArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Testimonis.
     * @param {TestimoniDeleteManyArgs} args - Arguments to filter Testimonis to delete.
     * @example
     * // Delete a few Testimonis
     * const { count } = await prisma.testimoni.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TestimoniDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestimoniDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Testimonis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonis
     * const testimoni = await prisma.testimoni.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TestimoniUpdateManyArgs>(args: Prisma.SelectSubset<T, TestimoniUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Testimonis and returns the data updated in the database.
     * @param {TestimoniUpdateManyAndReturnArgs} args - Arguments to update many Testimonis.
     * @example
     * // Update many Testimonis
     * const testimoni = await prisma.testimoni.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Testimonis and only return the `id`
     * const testimoniWithIdOnly = await prisma.testimoni.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestimoniUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestimoniUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Testimoni.
     * @param {TestimoniUpsertArgs} args - Arguments to update or create a Testimoni.
     * @example
     * // Update or create a Testimoni
     * const testimoni = await prisma.testimoni.upsert({
     *   create: {
     *     // ... data to create a Testimoni
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimoni we want to update
     *   }
     * })
     */
    upsert<T extends TestimoniUpsertArgs>(args: Prisma.SelectSubset<T, TestimoniUpsertArgs<ExtArgs>>): Prisma.Prisma__TestimoniClient<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Testimonis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniCountArgs} args - Arguments to filter Testimonis to count.
     * @example
     * // Count the number of Testimonis
     * const count = await prisma.testimoni.count({
     *   where: {
     *     // ... the filter for the Testimonis we want to count
     *   }
     * })
    **/
    count<T extends TestimoniCountArgs>(args?: Prisma.Subset<T, TestimoniCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestimoniCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Testimoni.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimoniAggregateArgs>(args: Prisma.Subset<T, TestimoniAggregateArgs>): Prisma.PrismaPromise<GetTestimoniAggregateType<T>>;
    /**
     * Group by Testimoni.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimoniGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TestimoniGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestimoniGroupByArgs['orderBy'];
    } : {
        orderBy?: TestimoniGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestimoniGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimoniGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Testimoni model
     */
    readonly fields: TestimoniFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Testimoni.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TestimoniClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pesanan<T extends Prisma.PesananDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PesananDefaultArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Testimoni model
 */
export interface TestimoniFieldRefs {
    readonly id: Prisma.FieldRef<"Testimoni", 'Int'>;
    readonly pesanan_id: Prisma.FieldRef<"Testimoni", 'Int'>;
    readonly user_id: Prisma.FieldRef<"Testimoni", 'Int'>;
    readonly produk_id: Prisma.FieldRef<"Testimoni", 'Int'>;
    readonly nama: Prisma.FieldRef<"Testimoni", 'String'>;
    readonly rating: Prisma.FieldRef<"Testimoni", 'Int'>;
    readonly komentar: Prisma.FieldRef<"Testimoni", 'String'>;
    readonly gambar: Prisma.FieldRef<"Testimoni", 'String'>;
    readonly balasan: Prisma.FieldRef<"Testimoni", 'String'>;
    readonly created_at: Prisma.FieldRef<"Testimoni", 'DateTime'>;
}
/**
 * Testimoni findUnique
 */
export type TestimoniFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * Filter, which Testimoni to fetch.
     */
    where: Prisma.TestimoniWhereUniqueInput;
};
/**
 * Testimoni findUniqueOrThrow
 */
export type TestimoniFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * Filter, which Testimoni to fetch.
     */
    where: Prisma.TestimoniWhereUniqueInput;
};
/**
 * Testimoni findFirst
 */
export type TestimoniFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * Filter, which Testimoni to fetch.
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Testimonis to fetch.
     */
    orderBy?: Prisma.TestimoniOrderByWithRelationInput | Prisma.TestimoniOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Testimonis.
     */
    cursor?: Prisma.TestimoniWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Testimonis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Testimonis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Testimonis.
     */
    distinct?: Prisma.TestimoniScalarFieldEnum | Prisma.TestimoniScalarFieldEnum[];
};
/**
 * Testimoni findFirstOrThrow
 */
export type TestimoniFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * Filter, which Testimoni to fetch.
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Testimonis to fetch.
     */
    orderBy?: Prisma.TestimoniOrderByWithRelationInput | Prisma.TestimoniOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Testimonis.
     */
    cursor?: Prisma.TestimoniWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Testimonis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Testimonis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Testimonis.
     */
    distinct?: Prisma.TestimoniScalarFieldEnum | Prisma.TestimoniScalarFieldEnum[];
};
/**
 * Testimoni findMany
 */
export type TestimoniFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * Filter, which Testimonis to fetch.
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Testimonis to fetch.
     */
    orderBy?: Prisma.TestimoniOrderByWithRelationInput | Prisma.TestimoniOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Testimonis.
     */
    cursor?: Prisma.TestimoniWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Testimonis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Testimonis.
     */
    skip?: number;
    distinct?: Prisma.TestimoniScalarFieldEnum | Prisma.TestimoniScalarFieldEnum[];
};
/**
 * Testimoni create
 */
export type TestimoniCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * The data needed to create a Testimoni.
     */
    data: Prisma.XOR<Prisma.TestimoniCreateInput, Prisma.TestimoniUncheckedCreateInput>;
};
/**
 * Testimoni createMany
 */
export type TestimoniCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonis.
     */
    data: Prisma.TestimoniCreateManyInput | Prisma.TestimoniCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Testimoni createManyAndReturn
 */
export type TestimoniCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * The data used to create many Testimonis.
     */
    data: Prisma.TestimoniCreateManyInput | Prisma.TestimoniCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Testimoni update
 */
export type TestimoniUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * The data needed to update a Testimoni.
     */
    data: Prisma.XOR<Prisma.TestimoniUpdateInput, Prisma.TestimoniUncheckedUpdateInput>;
    /**
     * Choose, which Testimoni to update.
     */
    where: Prisma.TestimoniWhereUniqueInput;
};
/**
 * Testimoni updateMany
 */
export type TestimoniUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonis.
     */
    data: Prisma.XOR<Prisma.TestimoniUpdateManyMutationInput, Prisma.TestimoniUncheckedUpdateManyInput>;
    /**
     * Filter which Testimonis to update
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * Limit how many Testimonis to update.
     */
    limit?: number;
};
/**
 * Testimoni updateManyAndReturn
 */
export type TestimoniUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * The data used to update Testimonis.
     */
    data: Prisma.XOR<Prisma.TestimoniUpdateManyMutationInput, Prisma.TestimoniUncheckedUpdateManyInput>;
    /**
     * Filter which Testimonis to update
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * Limit how many Testimonis to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Testimoni upsert
 */
export type TestimoniUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * The filter to search for the Testimoni to update in case it exists.
     */
    where: Prisma.TestimoniWhereUniqueInput;
    /**
     * In case the Testimoni found by the `where` argument doesn't exist, create a new Testimoni with this data.
     */
    create: Prisma.XOR<Prisma.TestimoniCreateInput, Prisma.TestimoniUncheckedCreateInput>;
    /**
     * In case the Testimoni was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TestimoniUpdateInput, Prisma.TestimoniUncheckedUpdateInput>;
};
/**
 * Testimoni delete
 */
export type TestimoniDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
    /**
     * Filter which Testimoni to delete.
     */
    where: Prisma.TestimoniWhereUniqueInput;
};
/**
 * Testimoni deleteMany
 */
export type TestimoniDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonis to delete
     */
    where?: Prisma.TestimoniWhereInput;
    /**
     * Limit how many Testimonis to delete.
     */
    limit?: number;
};
/**
 * Testimoni without action
 */
export type TestimoniDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimoni
     */
    select?: Prisma.TestimoniSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Testimoni
     */
    omit?: Prisma.TestimoniOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestimoniInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Testimoni.d.ts.map