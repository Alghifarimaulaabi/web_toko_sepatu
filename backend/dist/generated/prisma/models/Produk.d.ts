import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Produk
 *
 */
export type ProdukModel = runtime.Types.Result.DefaultSelection<Prisma.$ProdukPayload>;
export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null;
    _avg: ProdukAvgAggregateOutputType | null;
    _sum: ProdukSumAggregateOutputType | null;
    _min: ProdukMinAggregateOutputType | null;
    _max: ProdukMaxAggregateOutputType | null;
};
export type ProdukAvgAggregateOutputType = {
    id: number | null;
    harga: runtime.Decimal | null;
};
export type ProdukSumAggregateOutputType = {
    id: number | null;
    harga: runtime.Decimal | null;
};
export type ProdukMinAggregateOutputType = {
    id: number | null;
    kategori: $Enums.JenisKategori | null;
    nama_produk: string | null;
    deskripsi: string | null;
    harga: runtime.Decimal | null;
    gambar: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProdukMaxAggregateOutputType = {
    id: number | null;
    kategori: $Enums.JenisKategori | null;
    nama_produk: string | null;
    deskripsi: string | null;
    harga: runtime.Decimal | null;
    gambar: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProdukCountAggregateOutputType = {
    id: number;
    kategori: number;
    nama_produk: number;
    deskripsi: number;
    harga: number;
    gambar: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ProdukAvgAggregateInputType = {
    id?: true;
    harga?: true;
};
export type ProdukSumAggregateInputType = {
    id?: true;
    harga?: true;
};
export type ProdukMinAggregateInputType = {
    id?: true;
    kategori?: true;
    nama_produk?: true;
    deskripsi?: true;
    harga?: true;
    gambar?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProdukMaxAggregateInputType = {
    id?: true;
    kategori?: true;
    nama_produk?: true;
    deskripsi?: true;
    harga?: true;
    gambar?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProdukCountAggregateInputType = {
    id?: true;
    kategori?: true;
    nama_produk?: true;
    deskripsi?: true;
    harga?: true;
    gambar?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ProdukAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Produks to fetch.
     */
    orderBy?: Prisma.ProdukOrderByWithRelationInput | Prisma.ProdukOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProdukWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Produks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType;
};
export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
    [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduk[P]> : Prisma.GetScalarType<T[P], AggregateProduk[P]>;
};
export type ProdukGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdukWhereInput;
    orderBy?: Prisma.ProdukOrderByWithAggregationInput | Prisma.ProdukOrderByWithAggregationInput[];
    by: Prisma.ProdukScalarFieldEnum[] | Prisma.ProdukScalarFieldEnum;
    having?: Prisma.ProdukScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProdukCountAggregateInputType | true;
    _avg?: ProdukAvgAggregateInputType;
    _sum?: ProdukSumAggregateInputType;
    _min?: ProdukMinAggregateInputType;
    _max?: ProdukMaxAggregateInputType;
};
export type ProdukGroupByOutputType = {
    id: number;
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal;
    gambar: string;
    created_at: Date;
    updated_at: Date;
    _count: ProdukCountAggregateOutputType | null;
    _avg: ProdukAvgAggregateOutputType | null;
    _sum: ProdukSumAggregateOutputType | null;
    _min: ProdukMinAggregateOutputType | null;
    _max: ProdukMaxAggregateOutputType | null;
};
type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProdukGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProdukGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProdukGroupByOutputType[P]>;
}>>;
export type ProdukWhereInput = {
    AND?: Prisma.ProdukWhereInput | Prisma.ProdukWhereInput[];
    OR?: Prisma.ProdukWhereInput[];
    NOT?: Prisma.ProdukWhereInput | Prisma.ProdukWhereInput[];
    id?: Prisma.IntFilter<"Produk"> | number;
    kategori?: Prisma.EnumJenisKategoriFilter<"Produk"> | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFilter<"Produk"> | string;
    deskripsi?: Prisma.StringFilter<"Produk"> | string;
    harga?: Prisma.DecimalFilter<"Produk"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFilter<"Produk"> | string;
    created_at?: Prisma.DateTimeFilter<"Produk"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Produk"> | Date | string;
    detailPesanan?: Prisma.DetailPesananListRelationFilter;
    varian?: Prisma.ProdukVarianListRelationFilter;
    testimoni?: Prisma.TestimoniListRelationFilter;
};
export type ProdukOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kategori?: Prisma.SortOrder;
    nama_produk?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    detailPesanan?: Prisma.DetailPesananOrderByRelationAggregateInput;
    varian?: Prisma.ProdukVarianOrderByRelationAggregateInput;
    testimoni?: Prisma.TestimoniOrderByRelationAggregateInput;
};
export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProdukWhereInput | Prisma.ProdukWhereInput[];
    OR?: Prisma.ProdukWhereInput[];
    NOT?: Prisma.ProdukWhereInput | Prisma.ProdukWhereInput[];
    kategori?: Prisma.EnumJenisKategoriFilter<"Produk"> | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFilter<"Produk"> | string;
    deskripsi?: Prisma.StringFilter<"Produk"> | string;
    harga?: Prisma.DecimalFilter<"Produk"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFilter<"Produk"> | string;
    created_at?: Prisma.DateTimeFilter<"Produk"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Produk"> | Date | string;
    detailPesanan?: Prisma.DetailPesananListRelationFilter;
    varian?: Prisma.ProdukVarianListRelationFilter;
    testimoni?: Prisma.TestimoniListRelationFilter;
}, "id">;
export type ProdukOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kategori?: Prisma.SortOrder;
    nama_produk?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ProdukCountOrderByAggregateInput;
    _avg?: Prisma.ProdukAvgOrderByAggregateInput;
    _max?: Prisma.ProdukMaxOrderByAggregateInput;
    _min?: Prisma.ProdukMinOrderByAggregateInput;
    _sum?: Prisma.ProdukSumOrderByAggregateInput;
};
export type ProdukScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProdukScalarWhereWithAggregatesInput | Prisma.ProdukScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProdukScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProdukScalarWhereWithAggregatesInput | Prisma.ProdukScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Produk"> | number;
    kategori?: Prisma.EnumJenisKategoriWithAggregatesFilter<"Produk"> | $Enums.JenisKategori;
    nama_produk?: Prisma.StringWithAggregatesFilter<"Produk"> | string;
    deskripsi?: Prisma.StringWithAggregatesFilter<"Produk"> | string;
    harga?: Prisma.DecimalWithAggregatesFilter<"Produk"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringWithAggregatesFilter<"Produk"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Produk"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Produk"> | Date | string;
};
export type ProdukCreateInput = {
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananCreateNestedManyWithoutProdukInput;
    varian?: Prisma.ProdukVarianCreateNestedManyWithoutProdukInput;
    testimoni?: Prisma.TestimoniCreateNestedManyWithoutProdukInput;
};
export type ProdukUncheckedCreateInput = {
    id?: number;
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedCreateNestedManyWithoutProdukInput;
    varian?: Prisma.ProdukVarianUncheckedCreateNestedManyWithoutProdukInput;
    testimoni?: Prisma.TestimoniUncheckedCreateNestedManyWithoutProdukInput;
};
export type ProdukUpdateInput = {
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUpdateManyWithoutProdukNestedInput;
    varian?: Prisma.ProdukVarianUpdateManyWithoutProdukNestedInput;
    testimoni?: Prisma.TestimoniUpdateManyWithoutProdukNestedInput;
};
export type ProdukUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedUpdateManyWithoutProdukNestedInput;
    varian?: Prisma.ProdukVarianUncheckedUpdateManyWithoutProdukNestedInput;
    testimoni?: Prisma.TestimoniUncheckedUpdateManyWithoutProdukNestedInput;
};
export type ProdukCreateManyInput = {
    id?: number;
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdukUpdateManyMutationInput = {
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdukCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kategori?: Prisma.SortOrder;
    nama_produk?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdukAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
};
export type ProdukMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kategori?: Prisma.SortOrder;
    nama_produk?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdukMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kategori?: Prisma.SortOrder;
    nama_produk?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
    gambar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdukSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    harga?: Prisma.SortOrder;
};
export type ProdukScalarRelationFilter = {
    is?: Prisma.ProdukWhereInput;
    isNot?: Prisma.ProdukWhereInput;
};
export type EnumJenisKategoriFieldUpdateOperationsInput = {
    set?: $Enums.JenisKategori;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProdukCreateNestedOneWithoutVarianInput = {
    create?: Prisma.XOR<Prisma.ProdukCreateWithoutVarianInput, Prisma.ProdukUncheckedCreateWithoutVarianInput>;
    connectOrCreate?: Prisma.ProdukCreateOrConnectWithoutVarianInput;
    connect?: Prisma.ProdukWhereUniqueInput;
};
export type ProdukUpdateOneRequiredWithoutVarianNestedInput = {
    create?: Prisma.XOR<Prisma.ProdukCreateWithoutVarianInput, Prisma.ProdukUncheckedCreateWithoutVarianInput>;
    connectOrCreate?: Prisma.ProdukCreateOrConnectWithoutVarianInput;
    upsert?: Prisma.ProdukUpsertWithoutVarianInput;
    connect?: Prisma.ProdukWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdukUpdateToOneWithWhereWithoutVarianInput, Prisma.ProdukUpdateWithoutVarianInput>, Prisma.ProdukUncheckedUpdateWithoutVarianInput>;
};
export type ProdukCreateNestedOneWithoutDetailPesananInput = {
    create?: Prisma.XOR<Prisma.ProdukCreateWithoutDetailPesananInput, Prisma.ProdukUncheckedCreateWithoutDetailPesananInput>;
    connectOrCreate?: Prisma.ProdukCreateOrConnectWithoutDetailPesananInput;
    connect?: Prisma.ProdukWhereUniqueInput;
};
export type ProdukUpdateOneRequiredWithoutDetailPesananNestedInput = {
    create?: Prisma.XOR<Prisma.ProdukCreateWithoutDetailPesananInput, Prisma.ProdukUncheckedCreateWithoutDetailPesananInput>;
    connectOrCreate?: Prisma.ProdukCreateOrConnectWithoutDetailPesananInput;
    upsert?: Prisma.ProdukUpsertWithoutDetailPesananInput;
    connect?: Prisma.ProdukWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdukUpdateToOneWithWhereWithoutDetailPesananInput, Prisma.ProdukUpdateWithoutDetailPesananInput>, Prisma.ProdukUncheckedUpdateWithoutDetailPesananInput>;
};
export type ProdukCreateNestedOneWithoutTestimoniInput = {
    create?: Prisma.XOR<Prisma.ProdukCreateWithoutTestimoniInput, Prisma.ProdukUncheckedCreateWithoutTestimoniInput>;
    connectOrCreate?: Prisma.ProdukCreateOrConnectWithoutTestimoniInput;
    connect?: Prisma.ProdukWhereUniqueInput;
};
export type ProdukUpdateOneRequiredWithoutTestimoniNestedInput = {
    create?: Prisma.XOR<Prisma.ProdukCreateWithoutTestimoniInput, Prisma.ProdukUncheckedCreateWithoutTestimoniInput>;
    connectOrCreate?: Prisma.ProdukCreateOrConnectWithoutTestimoniInput;
    upsert?: Prisma.ProdukUpsertWithoutTestimoniInput;
    connect?: Prisma.ProdukWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdukUpdateToOneWithWhereWithoutTestimoniInput, Prisma.ProdukUpdateWithoutTestimoniInput>, Prisma.ProdukUncheckedUpdateWithoutTestimoniInput>;
};
export type ProdukCreateWithoutVarianInput = {
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananCreateNestedManyWithoutProdukInput;
    testimoni?: Prisma.TestimoniCreateNestedManyWithoutProdukInput;
};
export type ProdukUncheckedCreateWithoutVarianInput = {
    id?: number;
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedCreateNestedManyWithoutProdukInput;
    testimoni?: Prisma.TestimoniUncheckedCreateNestedManyWithoutProdukInput;
};
export type ProdukCreateOrConnectWithoutVarianInput = {
    where: Prisma.ProdukWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdukCreateWithoutVarianInput, Prisma.ProdukUncheckedCreateWithoutVarianInput>;
};
export type ProdukUpsertWithoutVarianInput = {
    update: Prisma.XOR<Prisma.ProdukUpdateWithoutVarianInput, Prisma.ProdukUncheckedUpdateWithoutVarianInput>;
    create: Prisma.XOR<Prisma.ProdukCreateWithoutVarianInput, Prisma.ProdukUncheckedCreateWithoutVarianInput>;
    where?: Prisma.ProdukWhereInput;
};
export type ProdukUpdateToOneWithWhereWithoutVarianInput = {
    where?: Prisma.ProdukWhereInput;
    data: Prisma.XOR<Prisma.ProdukUpdateWithoutVarianInput, Prisma.ProdukUncheckedUpdateWithoutVarianInput>;
};
export type ProdukUpdateWithoutVarianInput = {
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUpdateManyWithoutProdukNestedInput;
    testimoni?: Prisma.TestimoniUpdateManyWithoutProdukNestedInput;
};
export type ProdukUncheckedUpdateWithoutVarianInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedUpdateManyWithoutProdukNestedInput;
    testimoni?: Prisma.TestimoniUncheckedUpdateManyWithoutProdukNestedInput;
};
export type ProdukCreateWithoutDetailPesananInput = {
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    varian?: Prisma.ProdukVarianCreateNestedManyWithoutProdukInput;
    testimoni?: Prisma.TestimoniCreateNestedManyWithoutProdukInput;
};
export type ProdukUncheckedCreateWithoutDetailPesananInput = {
    id?: number;
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    varian?: Prisma.ProdukVarianUncheckedCreateNestedManyWithoutProdukInput;
    testimoni?: Prisma.TestimoniUncheckedCreateNestedManyWithoutProdukInput;
};
export type ProdukCreateOrConnectWithoutDetailPesananInput = {
    where: Prisma.ProdukWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdukCreateWithoutDetailPesananInput, Prisma.ProdukUncheckedCreateWithoutDetailPesananInput>;
};
export type ProdukUpsertWithoutDetailPesananInput = {
    update: Prisma.XOR<Prisma.ProdukUpdateWithoutDetailPesananInput, Prisma.ProdukUncheckedUpdateWithoutDetailPesananInput>;
    create: Prisma.XOR<Prisma.ProdukCreateWithoutDetailPesananInput, Prisma.ProdukUncheckedCreateWithoutDetailPesananInput>;
    where?: Prisma.ProdukWhereInput;
};
export type ProdukUpdateToOneWithWhereWithoutDetailPesananInput = {
    where?: Prisma.ProdukWhereInput;
    data: Prisma.XOR<Prisma.ProdukUpdateWithoutDetailPesananInput, Prisma.ProdukUncheckedUpdateWithoutDetailPesananInput>;
};
export type ProdukUpdateWithoutDetailPesananInput = {
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    varian?: Prisma.ProdukVarianUpdateManyWithoutProdukNestedInput;
    testimoni?: Prisma.TestimoniUpdateManyWithoutProdukNestedInput;
};
export type ProdukUncheckedUpdateWithoutDetailPesananInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    varian?: Prisma.ProdukVarianUncheckedUpdateManyWithoutProdukNestedInput;
    testimoni?: Prisma.TestimoniUncheckedUpdateManyWithoutProdukNestedInput;
};
export type ProdukCreateWithoutTestimoniInput = {
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananCreateNestedManyWithoutProdukInput;
    varian?: Prisma.ProdukVarianCreateNestedManyWithoutProdukInput;
};
export type ProdukUncheckedCreateWithoutTestimoniInput = {
    id?: number;
    kategori: $Enums.JenisKategori;
    nama_produk: string;
    deskripsi: string;
    harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedCreateNestedManyWithoutProdukInput;
    varian?: Prisma.ProdukVarianUncheckedCreateNestedManyWithoutProdukInput;
};
export type ProdukCreateOrConnectWithoutTestimoniInput = {
    where: Prisma.ProdukWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdukCreateWithoutTestimoniInput, Prisma.ProdukUncheckedCreateWithoutTestimoniInput>;
};
export type ProdukUpsertWithoutTestimoniInput = {
    update: Prisma.XOR<Prisma.ProdukUpdateWithoutTestimoniInput, Prisma.ProdukUncheckedUpdateWithoutTestimoniInput>;
    create: Prisma.XOR<Prisma.ProdukCreateWithoutTestimoniInput, Prisma.ProdukUncheckedCreateWithoutTestimoniInput>;
    where?: Prisma.ProdukWhereInput;
};
export type ProdukUpdateToOneWithWhereWithoutTestimoniInput = {
    where?: Prisma.ProdukWhereInput;
    data: Prisma.XOR<Prisma.ProdukUpdateWithoutTestimoniInput, Prisma.ProdukUncheckedUpdateWithoutTestimoniInput>;
};
export type ProdukUpdateWithoutTestimoniInput = {
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUpdateManyWithoutProdukNestedInput;
    varian?: Prisma.ProdukVarianUpdateManyWithoutProdukNestedInput;
};
export type ProdukUncheckedUpdateWithoutTestimoniInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kategori?: Prisma.EnumJenisKategoriFieldUpdateOperationsInput | $Enums.JenisKategori;
    nama_produk?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.StringFieldUpdateOperationsInput | string;
    harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gambar?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedUpdateManyWithoutProdukNestedInput;
    varian?: Prisma.ProdukVarianUncheckedUpdateManyWithoutProdukNestedInput;
};
/**
 * Count Type ProdukCountOutputType
 */
export type ProdukCountOutputType = {
    detailPesanan: number;
    varian: number;
    testimoni: number;
};
export type ProdukCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detailPesanan?: boolean | ProdukCountOutputTypeCountDetailPesananArgs;
    varian?: boolean | ProdukCountOutputTypeCountVarianArgs;
    testimoni?: boolean | ProdukCountOutputTypeCountTestimoniArgs;
};
/**
 * ProdukCountOutputType without action
 */
export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: Prisma.ProdukCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProdukCountOutputType without action
 */
export type ProdukCountOutputTypeCountDetailPesananArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailPesananWhereInput;
};
/**
 * ProdukCountOutputType without action
 */
export type ProdukCountOutputTypeCountVarianArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdukVarianWhereInput;
};
/**
 * ProdukCountOutputType without action
 */
export type ProdukCountOutputTypeCountTestimoniArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimoniWhereInput;
};
export type ProdukSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kategori?: boolean;
    nama_produk?: boolean;
    deskripsi?: boolean;
    harga?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    detailPesanan?: boolean | Prisma.Produk$detailPesananArgs<ExtArgs>;
    varian?: boolean | Prisma.Produk$varianArgs<ExtArgs>;
    testimoni?: boolean | Prisma.Produk$testimoniArgs<ExtArgs>;
    _count?: boolean | Prisma.ProdukCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produk"]>;
export type ProdukSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kategori?: boolean;
    nama_produk?: boolean;
    deskripsi?: boolean;
    harga?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["produk"]>;
export type ProdukSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kategori?: boolean;
    nama_produk?: boolean;
    deskripsi?: boolean;
    harga?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["produk"]>;
export type ProdukSelectScalar = {
    id?: boolean;
    kategori?: boolean;
    nama_produk?: boolean;
    deskripsi?: boolean;
    harga?: boolean;
    gambar?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ProdukOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kategori" | "nama_produk" | "deskripsi" | "harga" | "gambar" | "created_at" | "updated_at", ExtArgs["result"]["produk"]>;
export type ProdukInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detailPesanan?: boolean | Prisma.Produk$detailPesananArgs<ExtArgs>;
    varian?: boolean | Prisma.Produk$varianArgs<ExtArgs>;
    testimoni?: boolean | Prisma.Produk$testimoniArgs<ExtArgs>;
    _count?: boolean | Prisma.ProdukCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProdukIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProdukIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProdukPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Produk";
    objects: {
        detailPesanan: Prisma.$DetailPesananPayload<ExtArgs>[];
        varian: Prisma.$ProdukVarianPayload<ExtArgs>[];
        testimoni: Prisma.$TestimoniPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        kategori: $Enums.JenisKategori;
        nama_produk: string;
        deskripsi: string;
        harga: runtime.Decimal;
        gambar: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["produk"]>;
    composites: {};
};
export type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProdukPayload, S>;
export type ProdukCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProdukCountAggregateInputType | true;
};
export interface ProdukDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Produk'];
        meta: {
            name: 'Produk';
        };
    };
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukFindUniqueArgs>(args: Prisma.SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukFindFirstArgs>(args?: Prisma.SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     *
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProdukFindManyArgs>(args?: Prisma.SelectSubset<T, ProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     *
     */
    create<T extends ProdukCreateArgs>(args: Prisma.SelectSubset<T, ProdukCreateArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Produks.
     * @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProdukCreateManyArgs>(args?: Prisma.SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Produks and returns the data saved in the database.
     * @param {ProdukCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProdukCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     *
     */
    delete<T extends ProdukDeleteArgs>(args: Prisma.SelectSubset<T, ProdukDeleteArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProdukUpdateArgs>(args: Prisma.SelectSubset<T, ProdukUpdateArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProdukDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProdukUpdateManyArgs>(args: Prisma.SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {ProdukUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdukUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends ProdukUpsertArgs>(args: Prisma.SelectSubset<T, ProdukUpsertArgs<ExtArgs>>): Prisma.Prisma__ProdukClient<runtime.Types.Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(args?: Prisma.Subset<T, ProdukCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProdukCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Prisma.Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>;
    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProdukGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProdukGroupByArgs['orderBy'];
    } : {
        orderBy?: ProdukGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Produk model
     */
    readonly fields: ProdukFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Produk.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detailPesanan<T extends Prisma.Produk$detailPesananArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produk$detailPesananArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    varian<T extends Prisma.Produk$varianArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produk$varianArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdukVarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testimoni<T extends Prisma.Produk$testimoniArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produk$testimoniArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Produk model
 */
export interface ProdukFieldRefs {
    readonly id: Prisma.FieldRef<"Produk", 'Int'>;
    readonly kategori: Prisma.FieldRef<"Produk", 'JenisKategori'>;
    readonly nama_produk: Prisma.FieldRef<"Produk", 'String'>;
    readonly deskripsi: Prisma.FieldRef<"Produk", 'String'>;
    readonly harga: Prisma.FieldRef<"Produk", 'Decimal'>;
    readonly gambar: Prisma.FieldRef<"Produk", 'String'>;
    readonly created_at: Prisma.FieldRef<"Produk", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Produk", 'DateTime'>;
}
/**
 * Produk findUnique
 */
export type ProdukFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * Filter, which Produk to fetch.
     */
    where: Prisma.ProdukWhereUniqueInput;
};
/**
 * Produk findUniqueOrThrow
 */
export type ProdukFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * Filter, which Produk to fetch.
     */
    where: Prisma.ProdukWhereUniqueInput;
};
/**
 * Produk findFirst
 */
export type ProdukFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * Filter, which Produk to fetch.
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Produks to fetch.
     */
    orderBy?: Prisma.ProdukOrderByWithRelationInput | Prisma.ProdukOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Produks.
     */
    cursor?: Prisma.ProdukWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Produks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Produks.
     */
    distinct?: Prisma.ProdukScalarFieldEnum | Prisma.ProdukScalarFieldEnum[];
};
/**
 * Produk findFirstOrThrow
 */
export type ProdukFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * Filter, which Produk to fetch.
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Produks to fetch.
     */
    orderBy?: Prisma.ProdukOrderByWithRelationInput | Prisma.ProdukOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Produks.
     */
    cursor?: Prisma.ProdukWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Produks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Produks.
     */
    distinct?: Prisma.ProdukScalarFieldEnum | Prisma.ProdukScalarFieldEnum[];
};
/**
 * Produk findMany
 */
export type ProdukFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * Filter, which Produks to fetch.
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Produks to fetch.
     */
    orderBy?: Prisma.ProdukOrderByWithRelationInput | Prisma.ProdukOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Produks.
     */
    cursor?: Prisma.ProdukWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Produks.
     */
    skip?: number;
    distinct?: Prisma.ProdukScalarFieldEnum | Prisma.ProdukScalarFieldEnum[];
};
/**
 * Produk create
 */
export type ProdukCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * The data needed to create a Produk.
     */
    data: Prisma.XOR<Prisma.ProdukCreateInput, Prisma.ProdukUncheckedCreateInput>;
};
/**
 * Produk createMany
 */
export type ProdukCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: Prisma.ProdukCreateManyInput | Prisma.ProdukCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Produk createManyAndReturn
 */
export type ProdukCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * The data used to create many Produks.
     */
    data: Prisma.ProdukCreateManyInput | Prisma.ProdukCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Produk update
 */
export type ProdukUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * The data needed to update a Produk.
     */
    data: Prisma.XOR<Prisma.ProdukUpdateInput, Prisma.ProdukUncheckedUpdateInput>;
    /**
     * Choose, which Produk to update.
     */
    where: Prisma.ProdukWhereUniqueInput;
};
/**
 * Produk updateMany
 */
export type ProdukUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: Prisma.XOR<Prisma.ProdukUpdateManyMutationInput, Prisma.ProdukUncheckedUpdateManyInput>;
    /**
     * Filter which Produks to update
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * Limit how many Produks to update.
     */
    limit?: number;
};
/**
 * Produk updateManyAndReturn
 */
export type ProdukUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * The data used to update Produks.
     */
    data: Prisma.XOR<Prisma.ProdukUpdateManyMutationInput, Prisma.ProdukUncheckedUpdateManyInput>;
    /**
     * Filter which Produks to update
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * Limit how many Produks to update.
     */
    limit?: number;
};
/**
 * Produk upsert
 */
export type ProdukUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: Prisma.ProdukWhereUniqueInput;
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: Prisma.XOR<Prisma.ProdukCreateInput, Prisma.ProdukUncheckedCreateInput>;
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProdukUpdateInput, Prisma.ProdukUncheckedUpdateInput>;
};
/**
 * Produk delete
 */
export type ProdukDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
    /**
     * Filter which Produk to delete.
     */
    where: Prisma.ProdukWhereUniqueInput;
};
/**
 * Produk deleteMany
 */
export type ProdukDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: Prisma.ProdukWhereInput;
    /**
     * Limit how many Produks to delete.
     */
    limit?: number;
};
/**
 * Produk.detailPesanan
 */
export type Produk$detailPesananArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.DetailPesananWhereInput;
    orderBy?: Prisma.DetailPesananOrderByWithRelationInput | Prisma.DetailPesananOrderByWithRelationInput[];
    cursor?: Prisma.DetailPesananWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetailPesananScalarFieldEnum | Prisma.DetailPesananScalarFieldEnum[];
};
/**
 * Produk.varian
 */
export type Produk$varianArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProdukVarianWhereInput;
    orderBy?: Prisma.ProdukVarianOrderByWithRelationInput | Prisma.ProdukVarianOrderByWithRelationInput[];
    cursor?: Prisma.ProdukVarianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProdukVarianScalarFieldEnum | Prisma.ProdukVarianScalarFieldEnum[];
};
/**
 * Produk.testimoni
 */
export type Produk$testimoniArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TestimoniWhereInput;
    orderBy?: Prisma.TestimoniOrderByWithRelationInput | Prisma.TestimoniOrderByWithRelationInput[];
    cursor?: Prisma.TestimoniWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimoniScalarFieldEnum | Prisma.TestimoniScalarFieldEnum[];
};
/**
 * Produk without action
 */
export type ProdukDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: Prisma.ProdukSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produk
     */
    omit?: Prisma.ProdukOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdukInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Produk.d.ts.map