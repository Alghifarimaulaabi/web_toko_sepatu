import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DetailPesanan
 *
 */
export type DetailPesananModel = runtime.Types.Result.DefaultSelection<Prisma.$DetailPesananPayload>;
export type AggregateDetailPesanan = {
    _count: DetailPesananCountAggregateOutputType | null;
    _avg: DetailPesananAvgAggregateOutputType | null;
    _sum: DetailPesananSumAggregateOutputType | null;
    _min: DetailPesananMinAggregateOutputType | null;
    _max: DetailPesananMaxAggregateOutputType | null;
};
export type DetailPesananAvgAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    produk_id: number | null;
    jumlah: number | null;
    harga: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetailPesananSumAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    produk_id: number | null;
    jumlah: number | null;
    harga: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetailPesananMinAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    produk_id: number | null;
    jumlah: number | null;
    harga: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    warna: string | null;
    ukuran: string | null;
};
export type DetailPesananMaxAggregateOutputType = {
    id: number | null;
    pesanan_id: number | null;
    produk_id: number | null;
    jumlah: number | null;
    harga: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    warna: string | null;
    ukuran: string | null;
};
export type DetailPesananCountAggregateOutputType = {
    id: number;
    pesanan_id: number;
    produk_id: number;
    jumlah: number;
    harga: number;
    subtotal: number;
    warna: number;
    ukuran: number;
    _all: number;
};
export type DetailPesananAvgAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    produk_id?: true;
    jumlah?: true;
    harga?: true;
    subtotal?: true;
};
export type DetailPesananSumAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    produk_id?: true;
    jumlah?: true;
    harga?: true;
    subtotal?: true;
};
export type DetailPesananMinAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    produk_id?: true;
    jumlah?: true;
    harga?: true;
    subtotal?: true;
    warna?: true;
    ukuran?: true;
};
export type DetailPesananMaxAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    produk_id?: true;
    jumlah?: true;
    harga?: true;
    subtotal?: true;
    warna?: true;
    ukuran?: true;
};
export type DetailPesananCountAggregateInputType = {
    id?: true;
    pesanan_id?: true;
    produk_id?: true;
    jumlah?: true;
    harga?: true;
    subtotal?: true;
    warna?: true;
    ukuran?: true;
    _all?: true;
};
export type DetailPesananAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPesanan to aggregate.
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Prisma.DetailPesananOrderByWithRelationInput | Prisma.DetailPesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DetailPesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DetailPesanans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DetailPesanans
    **/
    _count?: true | DetailPesananCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DetailPesananAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DetailPesananSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DetailPesananMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DetailPesananMaxAggregateInputType;
};
export type GetDetailPesananAggregateType<T extends DetailPesananAggregateArgs> = {
    [P in keyof T & keyof AggregateDetailPesanan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetailPesanan[P]> : Prisma.GetScalarType<T[P], AggregateDetailPesanan[P]>;
};
export type DetailPesananGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailPesananWhereInput;
    orderBy?: Prisma.DetailPesananOrderByWithAggregationInput | Prisma.DetailPesananOrderByWithAggregationInput[];
    by: Prisma.DetailPesananScalarFieldEnum[] | Prisma.DetailPesananScalarFieldEnum;
    having?: Prisma.DetailPesananScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetailPesananCountAggregateInputType | true;
    _avg?: DetailPesananAvgAggregateInputType;
    _sum?: DetailPesananSumAggregateInputType;
    _min?: DetailPesananMinAggregateInputType;
    _max?: DetailPesananMaxAggregateInputType;
};
export type DetailPesananGroupByOutputType = {
    id: number;
    pesanan_id: number;
    produk_id: number;
    jumlah: number;
    harga: runtime.Decimal;
    subtotal: runtime.Decimal;
    warna: string | null;
    ukuran: string | null;
    _count: DetailPesananCountAggregateOutputType | null;
    _avg: DetailPesananAvgAggregateOutputType | null;
    _sum: DetailPesananSumAggregateOutputType | null;
    _min: DetailPesananMinAggregateOutputType | null;
    _max: DetailPesananMaxAggregateOutputType | null;
};
type GetDetailPesananGroupByPayload<T extends DetailPesananGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetailPesananGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetailPesananGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetailPesananGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetailPesananGroupByOutputType[P]>;
}>>;
export type DetailPesananWhereInput = {
    AND?: Prisma.DetailPesananWhereInput | Prisma.DetailPesananWhereInput[];
    OR?: Prisma.DetailPesananWhereInput[];
    NOT?: Prisma.DetailPesananWhereInput | Prisma.DetailPesananWhereInput[];
    id?: Prisma.IntFilter<"DetailPesanan"> | number;
    pesanan_id?: Prisma.IntFilter<"DetailPesanan"> | number;
    produk_id?: Prisma.IntFilter<"DetailPesanan"> | number;
    jumlah?: Prisma.IntFilter<"DetailPesanan"> | number;
    harga?: Prisma.DecimalFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.StringNullableFilter<"DetailPesanan"> | string | null;
    ukuran?: Prisma.StringNullableFilter<"DetailPesanan"> | string | null;
    pesanan?: Prisma.XOR<Prisma.PesananScalarRelationFilter, Prisma.PesananWhereInput>;
    produk?: Prisma.XOR<Prisma.ProdukScalarRelationFilter, Prisma.ProdukWhereInput>;
};
export type DetailPesananOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    warna?: Prisma.SortOrderInput | Prisma.SortOrder;
    ukuran?: Prisma.SortOrderInput | Prisma.SortOrder;
    pesanan?: Prisma.PesananOrderByWithRelationInput;
    produk?: Prisma.ProdukOrderByWithRelationInput;
};
export type DetailPesananWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DetailPesananWhereInput | Prisma.DetailPesananWhereInput[];
    OR?: Prisma.DetailPesananWhereInput[];
    NOT?: Prisma.DetailPesananWhereInput | Prisma.DetailPesananWhereInput[];
    pesanan_id?: Prisma.IntFilter<"DetailPesanan"> | number;
    produk_id?: Prisma.IntFilter<"DetailPesanan"> | number;
    jumlah?: Prisma.IntFilter<"DetailPesanan"> | number;
    harga?: Prisma.DecimalFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.StringNullableFilter<"DetailPesanan"> | string | null;
    ukuran?: Prisma.StringNullableFilter<"DetailPesanan"> | string | null;
    pesanan?: Prisma.XOR<Prisma.PesananScalarRelationFilter, Prisma.PesananWhereInput>;
    produk?: Prisma.XOR<Prisma.ProdukScalarRelationFilter, Prisma.ProdukWhereInput>;
}, "id">;
export type DetailPesananOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    warna?: Prisma.SortOrderInput | Prisma.SortOrder;
    ukuran?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DetailPesananCountOrderByAggregateInput;
    _avg?: Prisma.DetailPesananAvgOrderByAggregateInput;
    _max?: Prisma.DetailPesananMaxOrderByAggregateInput;
    _min?: Prisma.DetailPesananMinOrderByAggregateInput;
    _sum?: Prisma.DetailPesananSumOrderByAggregateInput;
};
export type DetailPesananScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetailPesananScalarWhereWithAggregatesInput | Prisma.DetailPesananScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetailPesananScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetailPesananScalarWhereWithAggregatesInput | Prisma.DetailPesananScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DetailPesanan"> | number;
    pesanan_id?: Prisma.IntWithAggregatesFilter<"DetailPesanan"> | number;
    produk_id?: Prisma.IntWithAggregatesFilter<"DetailPesanan"> | number;
    jumlah?: Prisma.IntWithAggregatesFilter<"DetailPesanan"> | number;
    harga?: Prisma.DecimalWithAggregatesFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.StringNullableWithAggregatesFilter<"DetailPesanan"> | string | null;
    ukuran?: Prisma.StringNullableWithAggregatesFilter<"DetailPesanan"> | string | null;
};
export type DetailPesananCreateInput = {
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
    pesanan: Prisma.PesananCreateNestedOneWithoutDetailPesananInput;
    produk: Prisma.ProdukCreateNestedOneWithoutDetailPesananInput;
};
export type DetailPesananUncheckedCreateInput = {
    id?: number;
    pesanan_id: number;
    produk_id: number;
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
};
export type DetailPesananUpdateInput = {
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pesanan?: Prisma.PesananUpdateOneRequiredWithoutDetailPesananNestedInput;
    produk?: Prisma.ProdukUpdateOneRequiredWithoutDetailPesananNestedInput;
};
export type DetailPesananUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananCreateManyInput = {
    id?: number;
    pesanan_id: number;
    produk_id: number;
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
};
export type DetailPesananUpdateManyMutationInput = {
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananListRelationFilter = {
    every?: Prisma.DetailPesananWhereInput;
    some?: Prisma.DetailPesananWhereInput;
    none?: Prisma.DetailPesananWhereInput;
};
export type DetailPesananOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetailPesananCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
};
export type DetailPesananAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetailPesananMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
};
export type DetailPesananMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    warna?: Prisma.SortOrder;
    ukuran?: Prisma.SortOrder;
};
export type DetailPesananSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pesanan_id?: Prisma.SortOrder;
    produk_id?: Prisma.SortOrder;
    jumlah?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetailPesananCreateNestedManyWithoutProdukInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutProdukInput, Prisma.DetailPesananUncheckedCreateWithoutProdukInput> | Prisma.DetailPesananCreateWithoutProdukInput[] | Prisma.DetailPesananUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutProdukInput | Prisma.DetailPesananCreateOrConnectWithoutProdukInput[];
    createMany?: Prisma.DetailPesananCreateManyProdukInputEnvelope;
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
};
export type DetailPesananUncheckedCreateNestedManyWithoutProdukInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutProdukInput, Prisma.DetailPesananUncheckedCreateWithoutProdukInput> | Prisma.DetailPesananCreateWithoutProdukInput[] | Prisma.DetailPesananUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutProdukInput | Prisma.DetailPesananCreateOrConnectWithoutProdukInput[];
    createMany?: Prisma.DetailPesananCreateManyProdukInputEnvelope;
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
};
export type DetailPesananUpdateManyWithoutProdukNestedInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutProdukInput, Prisma.DetailPesananUncheckedCreateWithoutProdukInput> | Prisma.DetailPesananCreateWithoutProdukInput[] | Prisma.DetailPesananUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutProdukInput | Prisma.DetailPesananCreateOrConnectWithoutProdukInput[];
    upsert?: Prisma.DetailPesananUpsertWithWhereUniqueWithoutProdukInput | Prisma.DetailPesananUpsertWithWhereUniqueWithoutProdukInput[];
    createMany?: Prisma.DetailPesananCreateManyProdukInputEnvelope;
    set?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    disconnect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    delete?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    update?: Prisma.DetailPesananUpdateWithWhereUniqueWithoutProdukInput | Prisma.DetailPesananUpdateWithWhereUniqueWithoutProdukInput[];
    updateMany?: Prisma.DetailPesananUpdateManyWithWhereWithoutProdukInput | Prisma.DetailPesananUpdateManyWithWhereWithoutProdukInput[];
    deleteMany?: Prisma.DetailPesananScalarWhereInput | Prisma.DetailPesananScalarWhereInput[];
};
export type DetailPesananUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutProdukInput, Prisma.DetailPesananUncheckedCreateWithoutProdukInput> | Prisma.DetailPesananCreateWithoutProdukInput[] | Prisma.DetailPesananUncheckedCreateWithoutProdukInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutProdukInput | Prisma.DetailPesananCreateOrConnectWithoutProdukInput[];
    upsert?: Prisma.DetailPesananUpsertWithWhereUniqueWithoutProdukInput | Prisma.DetailPesananUpsertWithWhereUniqueWithoutProdukInput[];
    createMany?: Prisma.DetailPesananCreateManyProdukInputEnvelope;
    set?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    disconnect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    delete?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    update?: Prisma.DetailPesananUpdateWithWhereUniqueWithoutProdukInput | Prisma.DetailPesananUpdateWithWhereUniqueWithoutProdukInput[];
    updateMany?: Prisma.DetailPesananUpdateManyWithWhereWithoutProdukInput | Prisma.DetailPesananUpdateManyWithWhereWithoutProdukInput[];
    deleteMany?: Prisma.DetailPesananScalarWhereInput | Prisma.DetailPesananScalarWhereInput[];
};
export type DetailPesananCreateNestedManyWithoutPesananInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutPesananInput, Prisma.DetailPesananUncheckedCreateWithoutPesananInput> | Prisma.DetailPesananCreateWithoutPesananInput[] | Prisma.DetailPesananUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutPesananInput | Prisma.DetailPesananCreateOrConnectWithoutPesananInput[];
    createMany?: Prisma.DetailPesananCreateManyPesananInputEnvelope;
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
};
export type DetailPesananUncheckedCreateNestedManyWithoutPesananInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutPesananInput, Prisma.DetailPesananUncheckedCreateWithoutPesananInput> | Prisma.DetailPesananCreateWithoutPesananInput[] | Prisma.DetailPesananUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutPesananInput | Prisma.DetailPesananCreateOrConnectWithoutPesananInput[];
    createMany?: Prisma.DetailPesananCreateManyPesananInputEnvelope;
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
};
export type DetailPesananUpdateManyWithoutPesananNestedInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutPesananInput, Prisma.DetailPesananUncheckedCreateWithoutPesananInput> | Prisma.DetailPesananCreateWithoutPesananInput[] | Prisma.DetailPesananUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutPesananInput | Prisma.DetailPesananCreateOrConnectWithoutPesananInput[];
    upsert?: Prisma.DetailPesananUpsertWithWhereUniqueWithoutPesananInput | Prisma.DetailPesananUpsertWithWhereUniqueWithoutPesananInput[];
    createMany?: Prisma.DetailPesananCreateManyPesananInputEnvelope;
    set?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    disconnect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    delete?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    update?: Prisma.DetailPesananUpdateWithWhereUniqueWithoutPesananInput | Prisma.DetailPesananUpdateWithWhereUniqueWithoutPesananInput[];
    updateMany?: Prisma.DetailPesananUpdateManyWithWhereWithoutPesananInput | Prisma.DetailPesananUpdateManyWithWhereWithoutPesananInput[];
    deleteMany?: Prisma.DetailPesananScalarWhereInput | Prisma.DetailPesananScalarWhereInput[];
};
export type DetailPesananUncheckedUpdateManyWithoutPesananNestedInput = {
    create?: Prisma.XOR<Prisma.DetailPesananCreateWithoutPesananInput, Prisma.DetailPesananUncheckedCreateWithoutPesananInput> | Prisma.DetailPesananCreateWithoutPesananInput[] | Prisma.DetailPesananUncheckedCreateWithoutPesananInput[];
    connectOrCreate?: Prisma.DetailPesananCreateOrConnectWithoutPesananInput | Prisma.DetailPesananCreateOrConnectWithoutPesananInput[];
    upsert?: Prisma.DetailPesananUpsertWithWhereUniqueWithoutPesananInput | Prisma.DetailPesananUpsertWithWhereUniqueWithoutPesananInput[];
    createMany?: Prisma.DetailPesananCreateManyPesananInputEnvelope;
    set?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    disconnect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    delete?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    connect?: Prisma.DetailPesananWhereUniqueInput | Prisma.DetailPesananWhereUniqueInput[];
    update?: Prisma.DetailPesananUpdateWithWhereUniqueWithoutPesananInput | Prisma.DetailPesananUpdateWithWhereUniqueWithoutPesananInput[];
    updateMany?: Prisma.DetailPesananUpdateManyWithWhereWithoutPesananInput | Prisma.DetailPesananUpdateManyWithWhereWithoutPesananInput[];
    deleteMany?: Prisma.DetailPesananScalarWhereInput | Prisma.DetailPesananScalarWhereInput[];
};
export type DetailPesananCreateWithoutProdukInput = {
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
    pesanan: Prisma.PesananCreateNestedOneWithoutDetailPesananInput;
};
export type DetailPesananUncheckedCreateWithoutProdukInput = {
    id?: number;
    pesanan_id: number;
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
};
export type DetailPesananCreateOrConnectWithoutProdukInput = {
    where: Prisma.DetailPesananWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetailPesananCreateWithoutProdukInput, Prisma.DetailPesananUncheckedCreateWithoutProdukInput>;
};
export type DetailPesananCreateManyProdukInputEnvelope = {
    data: Prisma.DetailPesananCreateManyProdukInput | Prisma.DetailPesananCreateManyProdukInput[];
    skipDuplicates?: boolean;
};
export type DetailPesananUpsertWithWhereUniqueWithoutProdukInput = {
    where: Prisma.DetailPesananWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetailPesananUpdateWithoutProdukInput, Prisma.DetailPesananUncheckedUpdateWithoutProdukInput>;
    create: Prisma.XOR<Prisma.DetailPesananCreateWithoutProdukInput, Prisma.DetailPesananUncheckedCreateWithoutProdukInput>;
};
export type DetailPesananUpdateWithWhereUniqueWithoutProdukInput = {
    where: Prisma.DetailPesananWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetailPesananUpdateWithoutProdukInput, Prisma.DetailPesananUncheckedUpdateWithoutProdukInput>;
};
export type DetailPesananUpdateManyWithWhereWithoutProdukInput = {
    where: Prisma.DetailPesananScalarWhereInput;
    data: Prisma.XOR<Prisma.DetailPesananUpdateManyMutationInput, Prisma.DetailPesananUncheckedUpdateManyWithoutProdukInput>;
};
export type DetailPesananScalarWhereInput = {
    AND?: Prisma.DetailPesananScalarWhereInput | Prisma.DetailPesananScalarWhereInput[];
    OR?: Prisma.DetailPesananScalarWhereInput[];
    NOT?: Prisma.DetailPesananScalarWhereInput | Prisma.DetailPesananScalarWhereInput[];
    id?: Prisma.IntFilter<"DetailPesanan"> | number;
    pesanan_id?: Prisma.IntFilter<"DetailPesanan"> | number;
    produk_id?: Prisma.IntFilter<"DetailPesanan"> | number;
    jumlah?: Prisma.IntFilter<"DetailPesanan"> | number;
    harga?: Prisma.DecimalFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetailPesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.StringNullableFilter<"DetailPesanan"> | string | null;
    ukuran?: Prisma.StringNullableFilter<"DetailPesanan"> | string | null;
};
export type DetailPesananCreateWithoutPesananInput = {
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
    produk: Prisma.ProdukCreateNestedOneWithoutDetailPesananInput;
};
export type DetailPesananUncheckedCreateWithoutPesananInput = {
    id?: number;
    produk_id: number;
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
};
export type DetailPesananCreateOrConnectWithoutPesananInput = {
    where: Prisma.DetailPesananWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetailPesananCreateWithoutPesananInput, Prisma.DetailPesananUncheckedCreateWithoutPesananInput>;
};
export type DetailPesananCreateManyPesananInputEnvelope = {
    data: Prisma.DetailPesananCreateManyPesananInput | Prisma.DetailPesananCreateManyPesananInput[];
    skipDuplicates?: boolean;
};
export type DetailPesananUpsertWithWhereUniqueWithoutPesananInput = {
    where: Prisma.DetailPesananWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetailPesananUpdateWithoutPesananInput, Prisma.DetailPesananUncheckedUpdateWithoutPesananInput>;
    create: Prisma.XOR<Prisma.DetailPesananCreateWithoutPesananInput, Prisma.DetailPesananUncheckedCreateWithoutPesananInput>;
};
export type DetailPesananUpdateWithWhereUniqueWithoutPesananInput = {
    where: Prisma.DetailPesananWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetailPesananUpdateWithoutPesananInput, Prisma.DetailPesananUncheckedUpdateWithoutPesananInput>;
};
export type DetailPesananUpdateManyWithWhereWithoutPesananInput = {
    where: Prisma.DetailPesananScalarWhereInput;
    data: Prisma.XOR<Prisma.DetailPesananUpdateManyMutationInput, Prisma.DetailPesananUncheckedUpdateManyWithoutPesananInput>;
};
export type DetailPesananCreateManyProdukInput = {
    id?: number;
    pesanan_id: number;
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
};
export type DetailPesananUpdateWithoutProdukInput = {
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pesanan?: Prisma.PesananUpdateOneRequiredWithoutDetailPesananNestedInput;
};
export type DetailPesananUncheckedUpdateWithoutProdukInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananUncheckedUpdateManyWithoutProdukInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pesanan_id?: Prisma.IntFieldUpdateOperationsInput | number;
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananCreateManyPesananInput = {
    id?: number;
    produk_id: number;
    jumlah: number;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: string | null;
    ukuran?: string | null;
};
export type DetailPesananUpdateWithoutPesananInput = {
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    produk?: Prisma.ProdukUpdateOneRequiredWithoutDetailPesananNestedInput;
};
export type DetailPesananUncheckedUpdateWithoutPesananInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananUncheckedUpdateManyWithoutPesananInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    produk_id?: Prisma.IntFieldUpdateOperationsInput | number;
    jumlah?: Prisma.IntFieldUpdateOperationsInput | number;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warna?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailPesananSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pesanan_id?: boolean;
    produk_id?: boolean;
    jumlah?: boolean;
    harga?: boolean;
    subtotal?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detailPesanan"]>;
export type DetailPesananSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pesanan_id?: boolean;
    produk_id?: boolean;
    jumlah?: boolean;
    harga?: boolean;
    subtotal?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detailPesanan"]>;
export type DetailPesananSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pesanan_id?: boolean;
    produk_id?: boolean;
    jumlah?: boolean;
    harga?: boolean;
    subtotal?: boolean;
    warna?: boolean;
    ukuran?: boolean;
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detailPesanan"]>;
export type DetailPesananSelectScalar = {
    id?: boolean;
    pesanan_id?: boolean;
    produk_id?: boolean;
    jumlah?: boolean;
    harga?: boolean;
    subtotal?: boolean;
    warna?: boolean;
    ukuran?: boolean;
};
export type DetailPesananOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pesanan_id" | "produk_id" | "jumlah" | "harga" | "subtotal" | "warna" | "ukuran", ExtArgs["result"]["detailPesanan"]>;
export type DetailPesananInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type DetailPesananIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type DetailPesananIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pesanan?: boolean | Prisma.PesananDefaultArgs<ExtArgs>;
    produk?: boolean | Prisma.ProdukDefaultArgs<ExtArgs>;
};
export type $DetailPesananPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetailPesanan";
    objects: {
        pesanan: Prisma.$PesananPayload<ExtArgs>;
        produk: Prisma.$ProdukPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pesanan_id: number;
        produk_id: number;
        jumlah: number;
        harga: runtime.Decimal;
        subtotal: runtime.Decimal;
        warna: string | null;
        ukuran: string | null;
    }, ExtArgs["result"]["detailPesanan"]>;
    composites: {};
};
export type DetailPesananGetPayload<S extends boolean | null | undefined | DetailPesananDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload, S>;
export type DetailPesananCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetailPesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetailPesananCountAggregateInputType | true;
};
export interface DetailPesananDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetailPesanan'];
        meta: {
            name: 'DetailPesanan';
        };
    };
    /**
     * Find zero or one DetailPesanan that matches the filter.
     * @param {DetailPesananFindUniqueArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailPesananFindUniqueArgs>(args: Prisma.SelectSubset<T, DetailPesananFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DetailPesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailPesananFindUniqueOrThrowArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailPesananFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetailPesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DetailPesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananFindFirstArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailPesananFindFirstArgs>(args?: Prisma.SelectSubset<T, DetailPesananFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DetailPesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananFindFirstOrThrowArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailPesananFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetailPesananFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DetailPesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailPesanans
     * const detailPesanans = await prisma.detailPesanan.findMany()
     *
     * // Get first 10 DetailPesanans
     * const detailPesanans = await prisma.detailPesanan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const detailPesananWithIdOnly = await prisma.detailPesanan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DetailPesananFindManyArgs>(args?: Prisma.SelectSubset<T, DetailPesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DetailPesanan.
     * @param {DetailPesananCreateArgs} args - Arguments to create a DetailPesanan.
     * @example
     * // Create one DetailPesanan
     * const DetailPesanan = await prisma.detailPesanan.create({
     *   data: {
     *     // ... data to create a DetailPesanan
     *   }
     * })
     *
     */
    create<T extends DetailPesananCreateArgs>(args: Prisma.SelectSubset<T, DetailPesananCreateArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DetailPesanans.
     * @param {DetailPesananCreateManyArgs} args - Arguments to create many DetailPesanans.
     * @example
     * // Create many DetailPesanans
     * const detailPesanan = await prisma.detailPesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DetailPesananCreateManyArgs>(args?: Prisma.SelectSubset<T, DetailPesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DetailPesanans and returns the data saved in the database.
     * @param {DetailPesananCreateManyAndReturnArgs} args - Arguments to create many DetailPesanans.
     * @example
     * // Create many DetailPesanans
     * const detailPesanan = await prisma.detailPesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DetailPesanans and only return the `id`
     * const detailPesananWithIdOnly = await prisma.detailPesanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DetailPesananCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetailPesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DetailPesanan.
     * @param {DetailPesananDeleteArgs} args - Arguments to delete one DetailPesanan.
     * @example
     * // Delete one DetailPesanan
     * const DetailPesanan = await prisma.detailPesanan.delete({
     *   where: {
     *     // ... filter to delete one DetailPesanan
     *   }
     * })
     *
     */
    delete<T extends DetailPesananDeleteArgs>(args: Prisma.SelectSubset<T, DetailPesananDeleteArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DetailPesanan.
     * @param {DetailPesananUpdateArgs} args - Arguments to update one DetailPesanan.
     * @example
     * // Update one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DetailPesananUpdateArgs>(args: Prisma.SelectSubset<T, DetailPesananUpdateArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DetailPesanans.
     * @param {DetailPesananDeleteManyArgs} args - Arguments to filter DetailPesanans to delete.
     * @example
     * // Delete a few DetailPesanans
     * const { count } = await prisma.detailPesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DetailPesananDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetailPesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DetailPesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailPesanans
     * const detailPesanan = await prisma.detailPesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DetailPesananUpdateManyArgs>(args: Prisma.SelectSubset<T, DetailPesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DetailPesanans and returns the data updated in the database.
     * @param {DetailPesananUpdateManyAndReturnArgs} args - Arguments to update many DetailPesanans.
     * @example
     * // Update many DetailPesanans
     * const detailPesanan = await prisma.detailPesanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DetailPesanans and only return the `id`
     * const detailPesananWithIdOnly = await prisma.detailPesanan.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailPesananUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetailPesananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DetailPesanan.
     * @param {DetailPesananUpsertArgs} args - Arguments to update or create a DetailPesanan.
     * @example
     * // Update or create a DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.upsert({
     *   create: {
     *     // ... data to create a DetailPesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailPesanan we want to update
     *   }
     * })
     */
    upsert<T extends DetailPesananUpsertArgs>(args: Prisma.SelectSubset<T, DetailPesananUpsertArgs<ExtArgs>>): Prisma.Prisma__DetailPesananClient<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DetailPesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananCountArgs} args - Arguments to filter DetailPesanans to count.
     * @example
     * // Count the number of DetailPesanans
     * const count = await prisma.detailPesanan.count({
     *   where: {
     *     // ... the filter for the DetailPesanans we want to count
     *   }
     * })
    **/
    count<T extends DetailPesananCountArgs>(args?: Prisma.Subset<T, DetailPesananCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetailPesananCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DetailPesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailPesananAggregateArgs>(args: Prisma.Subset<T, DetailPesananAggregateArgs>): Prisma.PrismaPromise<GetDetailPesananAggregateType<T>>;
    /**
     * Group by DetailPesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DetailPesananGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetailPesananGroupByArgs['orderBy'];
    } : {
        orderBy?: DetailPesananGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetailPesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DetailPesanan model
     */
    readonly fields: DetailPesananFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DetailPesanan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DetailPesananClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pesanan<T extends Prisma.PesananDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PesananDefaultArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the DetailPesanan model
 */
export interface DetailPesananFieldRefs {
    readonly id: Prisma.FieldRef<"DetailPesanan", 'Int'>;
    readonly pesanan_id: Prisma.FieldRef<"DetailPesanan", 'Int'>;
    readonly produk_id: Prisma.FieldRef<"DetailPesanan", 'Int'>;
    readonly jumlah: Prisma.FieldRef<"DetailPesanan", 'Int'>;
    readonly harga: Prisma.FieldRef<"DetailPesanan", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"DetailPesanan", 'Decimal'>;
    readonly warna: Prisma.FieldRef<"DetailPesanan", 'String'>;
    readonly ukuran: Prisma.FieldRef<"DetailPesanan", 'String'>;
}
/**
 * DetailPesanan findUnique
 */
export type DetailPesananFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where: Prisma.DetailPesananWhereUniqueInput;
};
/**
 * DetailPesanan findUniqueOrThrow
 */
export type DetailPesananFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where: Prisma.DetailPesananWhereUniqueInput;
};
/**
 * DetailPesanan findFirst
 */
export type DetailPesananFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Prisma.DetailPesananOrderByWithRelationInput | Prisma.DetailPesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DetailPesanans.
     */
    cursor?: Prisma.DetailPesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DetailPesanans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DetailPesanans.
     */
    distinct?: Prisma.DetailPesananScalarFieldEnum | Prisma.DetailPesananScalarFieldEnum[];
};
/**
 * DetailPesanan findFirstOrThrow
 */
export type DetailPesananFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Prisma.DetailPesananOrderByWithRelationInput | Prisma.DetailPesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DetailPesanans.
     */
    cursor?: Prisma.DetailPesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DetailPesanans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DetailPesanans.
     */
    distinct?: Prisma.DetailPesananScalarFieldEnum | Prisma.DetailPesananScalarFieldEnum[];
};
/**
 * DetailPesanan findMany
 */
export type DetailPesananFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * Filter, which DetailPesanans to fetch.
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Prisma.DetailPesananOrderByWithRelationInput | Prisma.DetailPesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DetailPesanans.
     */
    cursor?: Prisma.DetailPesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DetailPesanans.
     */
    skip?: number;
    distinct?: Prisma.DetailPesananScalarFieldEnum | Prisma.DetailPesananScalarFieldEnum[];
};
/**
 * DetailPesanan create
 */
export type DetailPesananCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * The data needed to create a DetailPesanan.
     */
    data: Prisma.XOR<Prisma.DetailPesananCreateInput, Prisma.DetailPesananUncheckedCreateInput>;
};
/**
 * DetailPesanan createMany
 */
export type DetailPesananCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailPesanans.
     */
    data: Prisma.DetailPesananCreateManyInput | Prisma.DetailPesananCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DetailPesanan createManyAndReturn
 */
export type DetailPesananCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * The data used to create many DetailPesanans.
     */
    data: Prisma.DetailPesananCreateManyInput | Prisma.DetailPesananCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DetailPesanan update
 */
export type DetailPesananUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * The data needed to update a DetailPesanan.
     */
    data: Prisma.XOR<Prisma.DetailPesananUpdateInput, Prisma.DetailPesananUncheckedUpdateInput>;
    /**
     * Choose, which DetailPesanan to update.
     */
    where: Prisma.DetailPesananWhereUniqueInput;
};
/**
 * DetailPesanan updateMany
 */
export type DetailPesananUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailPesanans.
     */
    data: Prisma.XOR<Prisma.DetailPesananUpdateManyMutationInput, Prisma.DetailPesananUncheckedUpdateManyInput>;
    /**
     * Filter which DetailPesanans to update
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * Limit how many DetailPesanans to update.
     */
    limit?: number;
};
/**
 * DetailPesanan updateManyAndReturn
 */
export type DetailPesananUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * The data used to update DetailPesanans.
     */
    data: Prisma.XOR<Prisma.DetailPesananUpdateManyMutationInput, Prisma.DetailPesananUncheckedUpdateManyInput>;
    /**
     * Filter which DetailPesanans to update
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * Limit how many DetailPesanans to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DetailPesanan upsert
 */
export type DetailPesananUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * The filter to search for the DetailPesanan to update in case it exists.
     */
    where: Prisma.DetailPesananWhereUniqueInput;
    /**
     * In case the DetailPesanan found by the `where` argument doesn't exist, create a new DetailPesanan with this data.
     */
    create: Prisma.XOR<Prisma.DetailPesananCreateInput, Prisma.DetailPesananUncheckedCreateInput>;
    /**
     * In case the DetailPesanan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DetailPesananUpdateInput, Prisma.DetailPesananUncheckedUpdateInput>;
};
/**
 * DetailPesanan delete
 */
export type DetailPesananDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
    /**
     * Filter which DetailPesanan to delete.
     */
    where: Prisma.DetailPesananWhereUniqueInput;
};
/**
 * DetailPesanan deleteMany
 */
export type DetailPesananDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPesanans to delete
     */
    where?: Prisma.DetailPesananWhereInput;
    /**
     * Limit how many DetailPesanans to delete.
     */
    limit?: number;
};
/**
 * DetailPesanan without action
 */
export type DetailPesananDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: Prisma.DetailPesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetailPesanan
     */
    omit?: Prisma.DetailPesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetailPesananInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DetailPesanan.d.ts.map