import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Pesanan
 *
 */
export type PesananModel = runtime.Types.Result.DefaultSelection<Prisma.$PesananPayload>;
export type AggregatePesanan = {
    _count: PesananCountAggregateOutputType | null;
    _avg: PesananAvgAggregateOutputType | null;
    _sum: PesananSumAggregateOutputType | null;
    _min: PesananMinAggregateOutputType | null;
    _max: PesananMaxAggregateOutputType | null;
};
export type PesananAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    total_harga: runtime.Decimal | null;
};
export type PesananSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    total_harga: runtime.Decimal | null;
};
export type PesananMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    kode_pesanan: string | null;
    nama_penerima: string | null;
    email: string | null;
    no_hp: string | null;
    alamat: string | null;
    kota: string | null;
    provinsi: string | null;
    kode_pos: string | null;
    catatan: string | null;
    total_harga: runtime.Decimal | null;
    metode_pembayaran: string | null;
    status: $Enums.StatusPesanan | null;
    tanggal_pesanan: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PesananMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    kode_pesanan: string | null;
    nama_penerima: string | null;
    email: string | null;
    no_hp: string | null;
    alamat: string | null;
    kota: string | null;
    provinsi: string | null;
    kode_pos: string | null;
    catatan: string | null;
    total_harga: runtime.Decimal | null;
    metode_pembayaran: string | null;
    status: $Enums.StatusPesanan | null;
    tanggal_pesanan: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PesananCountAggregateOutputType = {
    id: number;
    user_id: number;
    kode_pesanan: number;
    nama_penerima: number;
    email: number;
    no_hp: number;
    alamat: number;
    kota: number;
    provinsi: number;
    kode_pos: number;
    catatan: number;
    total_harga: number;
    metode_pembayaran: number;
    status: number;
    tanggal_pesanan: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PesananAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    total_harga?: true;
};
export type PesananSumAggregateInputType = {
    id?: true;
    user_id?: true;
    total_harga?: true;
};
export type PesananMinAggregateInputType = {
    id?: true;
    user_id?: true;
    kode_pesanan?: true;
    nama_penerima?: true;
    email?: true;
    no_hp?: true;
    alamat?: true;
    kota?: true;
    provinsi?: true;
    kode_pos?: true;
    catatan?: true;
    total_harga?: true;
    metode_pembayaran?: true;
    status?: true;
    tanggal_pesanan?: true;
    created_at?: true;
    updated_at?: true;
};
export type PesananMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    kode_pesanan?: true;
    nama_penerima?: true;
    email?: true;
    no_hp?: true;
    alamat?: true;
    kota?: true;
    provinsi?: true;
    kode_pos?: true;
    catatan?: true;
    total_harga?: true;
    metode_pembayaran?: true;
    status?: true;
    tanggal_pesanan?: true;
    created_at?: true;
    updated_at?: true;
};
export type PesananCountAggregateInputType = {
    id?: true;
    user_id?: true;
    kode_pesanan?: true;
    nama_penerima?: true;
    email?: true;
    no_hp?: true;
    alamat?: true;
    kota?: true;
    provinsi?: true;
    kode_pos?: true;
    catatan?: true;
    total_harga?: true;
    metode_pembayaran?: true;
    status?: true;
    tanggal_pesanan?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PesananAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanan to aggregate.
     */
    where?: Prisma.PesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Prisma.PesananOrderByWithRelationInput | Prisma.PesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pesanans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pesanans
    **/
    _count?: true | PesananCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PesananAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PesananSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PesananMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PesananMaxAggregateInputType;
};
export type GetPesananAggregateType<T extends PesananAggregateArgs> = {
    [P in keyof T & keyof AggregatePesanan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePesanan[P]> : Prisma.GetScalarType<T[P], AggregatePesanan[P]>;
};
export type PesananGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PesananWhereInput;
    orderBy?: Prisma.PesananOrderByWithAggregationInput | Prisma.PesananOrderByWithAggregationInput[];
    by: Prisma.PesananScalarFieldEnum[] | Prisma.PesananScalarFieldEnum;
    having?: Prisma.PesananScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PesananCountAggregateInputType | true;
    _avg?: PesananAvgAggregateInputType;
    _sum?: PesananSumAggregateInputType;
    _min?: PesananMinAggregateInputType;
    _max?: PesananMaxAggregateInputType;
};
export type PesananGroupByOutputType = {
    id: number;
    user_id: number;
    kode_pesanan: string;
    nama_penerima: string;
    email: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan: string | null;
    total_harga: runtime.Decimal;
    metode_pembayaran: string;
    status: $Enums.StatusPesanan;
    tanggal_pesanan: Date;
    created_at: Date;
    updated_at: Date;
    _count: PesananCountAggregateOutputType | null;
    _avg: PesananAvgAggregateOutputType | null;
    _sum: PesananSumAggregateOutputType | null;
    _min: PesananMinAggregateOutputType | null;
    _max: PesananMaxAggregateOutputType | null;
};
type GetPesananGroupByPayload<T extends PesananGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PesananGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PesananGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PesananGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PesananGroupByOutputType[P]>;
}>>;
export type PesananWhereInput = {
    AND?: Prisma.PesananWhereInput | Prisma.PesananWhereInput[];
    OR?: Prisma.PesananWhereInput[];
    NOT?: Prisma.PesananWhereInput | Prisma.PesananWhereInput[];
    id?: Prisma.IntFilter<"Pesanan"> | number;
    user_id?: Prisma.IntFilter<"Pesanan"> | number;
    kode_pesanan?: Prisma.StringFilter<"Pesanan"> | string;
    nama_penerima?: Prisma.StringFilter<"Pesanan"> | string;
    email?: Prisma.StringNullableFilter<"Pesanan"> | string | null;
    no_hp?: Prisma.StringFilter<"Pesanan"> | string;
    alamat?: Prisma.StringFilter<"Pesanan"> | string;
    kota?: Prisma.StringFilter<"Pesanan"> | string;
    provinsi?: Prisma.StringFilter<"Pesanan"> | string;
    kode_pos?: Prisma.StringFilter<"Pesanan"> | string;
    catatan?: Prisma.StringNullableFilter<"Pesanan"> | string | null;
    total_harga?: Prisma.DecimalFilter<"Pesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFilter<"Pesanan"> | string;
    status?: Prisma.EnumStatusPesananFilter<"Pesanan"> | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    detailPesanan?: Prisma.DetailPesananListRelationFilter;
    testimoni?: Prisma.TestimoniListRelationFilter;
};
export type PesananOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    kode_pesanan?: Prisma.SortOrder;
    nama_penerima?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_hp?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    provinsi?: Prisma.SortOrder;
    kode_pos?: Prisma.SortOrder;
    catatan?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
    metode_pembayaran?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tanggal_pesanan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    detailPesanan?: Prisma.DetailPesananOrderByRelationAggregateInput;
    testimoni?: Prisma.TestimoniOrderByRelationAggregateInput;
};
export type PesananWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    kode_pesanan?: string;
    AND?: Prisma.PesananWhereInput | Prisma.PesananWhereInput[];
    OR?: Prisma.PesananWhereInput[];
    NOT?: Prisma.PesananWhereInput | Prisma.PesananWhereInput[];
    user_id?: Prisma.IntFilter<"Pesanan"> | number;
    nama_penerima?: Prisma.StringFilter<"Pesanan"> | string;
    email?: Prisma.StringNullableFilter<"Pesanan"> | string | null;
    no_hp?: Prisma.StringFilter<"Pesanan"> | string;
    alamat?: Prisma.StringFilter<"Pesanan"> | string;
    kota?: Prisma.StringFilter<"Pesanan"> | string;
    provinsi?: Prisma.StringFilter<"Pesanan"> | string;
    kode_pos?: Prisma.StringFilter<"Pesanan"> | string;
    catatan?: Prisma.StringNullableFilter<"Pesanan"> | string | null;
    total_harga?: Prisma.DecimalFilter<"Pesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFilter<"Pesanan"> | string;
    status?: Prisma.EnumStatusPesananFilter<"Pesanan"> | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    detailPesanan?: Prisma.DetailPesananListRelationFilter;
    testimoni?: Prisma.TestimoniListRelationFilter;
}, "id" | "kode_pesanan">;
export type PesananOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    kode_pesanan?: Prisma.SortOrder;
    nama_penerima?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_hp?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    provinsi?: Prisma.SortOrder;
    kode_pos?: Prisma.SortOrder;
    catatan?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
    metode_pembayaran?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tanggal_pesanan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.PesananCountOrderByAggregateInput;
    _avg?: Prisma.PesananAvgOrderByAggregateInput;
    _max?: Prisma.PesananMaxOrderByAggregateInput;
    _min?: Prisma.PesananMinOrderByAggregateInput;
    _sum?: Prisma.PesananSumOrderByAggregateInput;
};
export type PesananScalarWhereWithAggregatesInput = {
    AND?: Prisma.PesananScalarWhereWithAggregatesInput | Prisma.PesananScalarWhereWithAggregatesInput[];
    OR?: Prisma.PesananScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PesananScalarWhereWithAggregatesInput | Prisma.PesananScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pesanan"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"Pesanan"> | number;
    kode_pesanan?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    nama_penerima?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Pesanan"> | string | null;
    no_hp?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    alamat?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    kota?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    provinsi?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    kode_pos?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    catatan?: Prisma.StringNullableWithAggregatesFilter<"Pesanan"> | string | null;
    total_harga?: Prisma.DecimalWithAggregatesFilter<"Pesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringWithAggregatesFilter<"Pesanan"> | string;
    status?: Prisma.EnumStatusPesananWithAggregatesFilter<"Pesanan"> | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeWithAggregatesFilter<"Pesanan"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Pesanan"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Pesanan"> | Date | string;
};
export type PesananCreateInput = {
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPesananInput;
    detailPesanan?: Prisma.DetailPesananCreateNestedManyWithoutPesananInput;
    testimoni?: Prisma.TestimoniCreateNestedManyWithoutPesananInput;
};
export type PesananUncheckedCreateInput = {
    id?: number;
    user_id: number;
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedCreateNestedManyWithoutPesananInput;
    testimoni?: Prisma.TestimoniUncheckedCreateNestedManyWithoutPesananInput;
};
export type PesananUpdateInput = {
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPesananNestedInput;
    detailPesanan?: Prisma.DetailPesananUpdateManyWithoutPesananNestedInput;
    testimoni?: Prisma.TestimoniUpdateManyWithoutPesananNestedInput;
};
export type PesananUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedUpdateManyWithoutPesananNestedInput;
    testimoni?: Prisma.TestimoniUncheckedUpdateManyWithoutPesananNestedInput;
};
export type PesananCreateManyInput = {
    id?: number;
    user_id: number;
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type PesananUpdateManyMutationInput = {
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PesananUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PesananListRelationFilter = {
    every?: Prisma.PesananWhereInput;
    some?: Prisma.PesananWhereInput;
    none?: Prisma.PesananWhereInput;
};
export type PesananOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PesananCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    kode_pesanan?: Prisma.SortOrder;
    nama_penerima?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    no_hp?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    provinsi?: Prisma.SortOrder;
    kode_pos?: Prisma.SortOrder;
    catatan?: Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
    metode_pembayaran?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tanggal_pesanan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PesananAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
};
export type PesananMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    kode_pesanan?: Prisma.SortOrder;
    nama_penerima?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    no_hp?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    provinsi?: Prisma.SortOrder;
    kode_pos?: Prisma.SortOrder;
    catatan?: Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
    metode_pembayaran?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tanggal_pesanan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PesananMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    kode_pesanan?: Prisma.SortOrder;
    nama_penerima?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    no_hp?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    provinsi?: Prisma.SortOrder;
    kode_pos?: Prisma.SortOrder;
    catatan?: Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
    metode_pembayaran?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tanggal_pesanan?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PesananSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    total_harga?: Prisma.SortOrder;
};
export type PesananScalarRelationFilter = {
    is?: Prisma.PesananWhereInput;
    isNot?: Prisma.PesananWhereInput;
};
export type PesananCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutUserInput, Prisma.PesananUncheckedCreateWithoutUserInput> | Prisma.PesananCreateWithoutUserInput[] | Prisma.PesananUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutUserInput | Prisma.PesananCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PesananCreateManyUserInputEnvelope;
    connect?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
};
export type PesananUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutUserInput, Prisma.PesananUncheckedCreateWithoutUserInput> | Prisma.PesananCreateWithoutUserInput[] | Prisma.PesananUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutUserInput | Prisma.PesananCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PesananCreateManyUserInputEnvelope;
    connect?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
};
export type PesananUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutUserInput, Prisma.PesananUncheckedCreateWithoutUserInput> | Prisma.PesananCreateWithoutUserInput[] | Prisma.PesananUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutUserInput | Prisma.PesananCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PesananUpsertWithWhereUniqueWithoutUserInput | Prisma.PesananUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PesananCreateManyUserInputEnvelope;
    set?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    disconnect?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    delete?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    connect?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    update?: Prisma.PesananUpdateWithWhereUniqueWithoutUserInput | Prisma.PesananUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PesananUpdateManyWithWhereWithoutUserInput | Prisma.PesananUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PesananScalarWhereInput | Prisma.PesananScalarWhereInput[];
};
export type PesananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutUserInput, Prisma.PesananUncheckedCreateWithoutUserInput> | Prisma.PesananCreateWithoutUserInput[] | Prisma.PesananUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutUserInput | Prisma.PesananCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PesananUpsertWithWhereUniqueWithoutUserInput | Prisma.PesananUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PesananCreateManyUserInputEnvelope;
    set?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    disconnect?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    delete?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    connect?: Prisma.PesananWhereUniqueInput | Prisma.PesananWhereUniqueInput[];
    update?: Prisma.PesananUpdateWithWhereUniqueWithoutUserInput | Prisma.PesananUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PesananUpdateManyWithWhereWithoutUserInput | Prisma.PesananUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PesananScalarWhereInput | Prisma.PesananScalarWhereInput[];
};
export type EnumStatusPesananFieldUpdateOperationsInput = {
    set?: $Enums.StatusPesanan;
};
export type PesananCreateNestedOneWithoutDetailPesananInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutDetailPesananInput, Prisma.PesananUncheckedCreateWithoutDetailPesananInput>;
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutDetailPesananInput;
    connect?: Prisma.PesananWhereUniqueInput;
};
export type PesananUpdateOneRequiredWithoutDetailPesananNestedInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutDetailPesananInput, Prisma.PesananUncheckedCreateWithoutDetailPesananInput>;
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutDetailPesananInput;
    upsert?: Prisma.PesananUpsertWithoutDetailPesananInput;
    connect?: Prisma.PesananWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PesananUpdateToOneWithWhereWithoutDetailPesananInput, Prisma.PesananUpdateWithoutDetailPesananInput>, Prisma.PesananUncheckedUpdateWithoutDetailPesananInput>;
};
export type PesananCreateNestedOneWithoutTestimoniInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutTestimoniInput, Prisma.PesananUncheckedCreateWithoutTestimoniInput>;
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutTestimoniInput;
    connect?: Prisma.PesananWhereUniqueInput;
};
export type PesananUpdateOneRequiredWithoutTestimoniNestedInput = {
    create?: Prisma.XOR<Prisma.PesananCreateWithoutTestimoniInput, Prisma.PesananUncheckedCreateWithoutTestimoniInput>;
    connectOrCreate?: Prisma.PesananCreateOrConnectWithoutTestimoniInput;
    upsert?: Prisma.PesananUpsertWithoutTestimoniInput;
    connect?: Prisma.PesananWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PesananUpdateToOneWithWhereWithoutTestimoniInput, Prisma.PesananUpdateWithoutTestimoniInput>, Prisma.PesananUncheckedUpdateWithoutTestimoniInput>;
};
export type PesananCreateWithoutUserInput = {
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananCreateNestedManyWithoutPesananInput;
    testimoni?: Prisma.TestimoniCreateNestedManyWithoutPesananInput;
};
export type PesananUncheckedCreateWithoutUserInput = {
    id?: number;
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedCreateNestedManyWithoutPesananInput;
    testimoni?: Prisma.TestimoniUncheckedCreateNestedManyWithoutPesananInput;
};
export type PesananCreateOrConnectWithoutUserInput = {
    where: Prisma.PesananWhereUniqueInput;
    create: Prisma.XOR<Prisma.PesananCreateWithoutUserInput, Prisma.PesananUncheckedCreateWithoutUserInput>;
};
export type PesananCreateManyUserInputEnvelope = {
    data: Prisma.PesananCreateManyUserInput | Prisma.PesananCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PesananUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PesananWhereUniqueInput;
    update: Prisma.XOR<Prisma.PesananUpdateWithoutUserInput, Prisma.PesananUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PesananCreateWithoutUserInput, Prisma.PesananUncheckedCreateWithoutUserInput>;
};
export type PesananUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PesananWhereUniqueInput;
    data: Prisma.XOR<Prisma.PesananUpdateWithoutUserInput, Prisma.PesananUncheckedUpdateWithoutUserInput>;
};
export type PesananUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PesananScalarWhereInput;
    data: Prisma.XOR<Prisma.PesananUpdateManyMutationInput, Prisma.PesananUncheckedUpdateManyWithoutUserInput>;
};
export type PesananScalarWhereInput = {
    AND?: Prisma.PesananScalarWhereInput | Prisma.PesananScalarWhereInput[];
    OR?: Prisma.PesananScalarWhereInput[];
    NOT?: Prisma.PesananScalarWhereInput | Prisma.PesananScalarWhereInput[];
    id?: Prisma.IntFilter<"Pesanan"> | number;
    user_id?: Prisma.IntFilter<"Pesanan"> | number;
    kode_pesanan?: Prisma.StringFilter<"Pesanan"> | string;
    nama_penerima?: Prisma.StringFilter<"Pesanan"> | string;
    email?: Prisma.StringNullableFilter<"Pesanan"> | string | null;
    no_hp?: Prisma.StringFilter<"Pesanan"> | string;
    alamat?: Prisma.StringFilter<"Pesanan"> | string;
    kota?: Prisma.StringFilter<"Pesanan"> | string;
    provinsi?: Prisma.StringFilter<"Pesanan"> | string;
    kode_pos?: Prisma.StringFilter<"Pesanan"> | string;
    catatan?: Prisma.StringNullableFilter<"Pesanan"> | string | null;
    total_harga?: Prisma.DecimalFilter<"Pesanan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFilter<"Pesanan"> | string;
    status?: Prisma.EnumStatusPesananFilter<"Pesanan"> | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Pesanan"> | Date | string;
};
export type PesananCreateWithoutDetailPesananInput = {
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPesananInput;
    testimoni?: Prisma.TestimoniCreateNestedManyWithoutPesananInput;
};
export type PesananUncheckedCreateWithoutDetailPesananInput = {
    id?: number;
    user_id: number;
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    testimoni?: Prisma.TestimoniUncheckedCreateNestedManyWithoutPesananInput;
};
export type PesananCreateOrConnectWithoutDetailPesananInput = {
    where: Prisma.PesananWhereUniqueInput;
    create: Prisma.XOR<Prisma.PesananCreateWithoutDetailPesananInput, Prisma.PesananUncheckedCreateWithoutDetailPesananInput>;
};
export type PesananUpsertWithoutDetailPesananInput = {
    update: Prisma.XOR<Prisma.PesananUpdateWithoutDetailPesananInput, Prisma.PesananUncheckedUpdateWithoutDetailPesananInput>;
    create: Prisma.XOR<Prisma.PesananCreateWithoutDetailPesananInput, Prisma.PesananUncheckedCreateWithoutDetailPesananInput>;
    where?: Prisma.PesananWhereInput;
};
export type PesananUpdateToOneWithWhereWithoutDetailPesananInput = {
    where?: Prisma.PesananWhereInput;
    data: Prisma.XOR<Prisma.PesananUpdateWithoutDetailPesananInput, Prisma.PesananUncheckedUpdateWithoutDetailPesananInput>;
};
export type PesananUpdateWithoutDetailPesananInput = {
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPesananNestedInput;
    testimoni?: Prisma.TestimoniUpdateManyWithoutPesananNestedInput;
};
export type PesananUncheckedUpdateWithoutDetailPesananInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testimoni?: Prisma.TestimoniUncheckedUpdateManyWithoutPesananNestedInput;
};
export type PesananCreateWithoutTestimoniInput = {
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPesananInput;
    detailPesanan?: Prisma.DetailPesananCreateNestedManyWithoutPesananInput;
};
export type PesananUncheckedCreateWithoutTestimoniInput = {
    id?: number;
    user_id: number;
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedCreateNestedManyWithoutPesananInput;
};
export type PesananCreateOrConnectWithoutTestimoniInput = {
    where: Prisma.PesananWhereUniqueInput;
    create: Prisma.XOR<Prisma.PesananCreateWithoutTestimoniInput, Prisma.PesananUncheckedCreateWithoutTestimoniInput>;
};
export type PesananUpsertWithoutTestimoniInput = {
    update: Prisma.XOR<Prisma.PesananUpdateWithoutTestimoniInput, Prisma.PesananUncheckedUpdateWithoutTestimoniInput>;
    create: Prisma.XOR<Prisma.PesananCreateWithoutTestimoniInput, Prisma.PesananUncheckedCreateWithoutTestimoniInput>;
    where?: Prisma.PesananWhereInput;
};
export type PesananUpdateToOneWithWhereWithoutTestimoniInput = {
    where?: Prisma.PesananWhereInput;
    data: Prisma.XOR<Prisma.PesananUpdateWithoutTestimoniInput, Prisma.PesananUncheckedUpdateWithoutTestimoniInput>;
};
export type PesananUpdateWithoutTestimoniInput = {
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPesananNestedInput;
    detailPesanan?: Prisma.DetailPesananUpdateManyWithoutPesananNestedInput;
};
export type PesananUncheckedUpdateWithoutTestimoniInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedUpdateManyWithoutPesananNestedInput;
};
export type PesananCreateManyUserInput = {
    id?: number;
    kode_pesanan: string;
    nama_penerima: string;
    email?: string | null;
    no_hp: string;
    alamat: string;
    kota: string;
    provinsi: string;
    kode_pos: string;
    catatan?: string | null;
    total_harga: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran: string;
    status?: $Enums.StatusPesanan;
    tanggal_pesanan?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type PesananUpdateWithoutUserInput = {
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUpdateManyWithoutPesananNestedInput;
    testimoni?: Prisma.TestimoniUpdateManyWithoutPesananNestedInput;
};
export type PesananUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detailPesanan?: Prisma.DetailPesananUncheckedUpdateManyWithoutPesananNestedInput;
    testimoni?: Prisma.TestimoniUncheckedUpdateManyWithoutPesananNestedInput;
};
export type PesananUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kode_pesanan?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_penerima?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_hp?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    provinsi?: Prisma.StringFieldUpdateOperationsInput | string;
    kode_pos?: Prisma.StringFieldUpdateOperationsInput | string;
    catatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_harga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metode_pembayaran?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusPesananFieldUpdateOperationsInput | $Enums.StatusPesanan;
    tanggal_pesanan?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PesananCountOutputType
 */
export type PesananCountOutputType = {
    detailPesanan: number;
    testimoni: number;
};
export type PesananCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detailPesanan?: boolean | PesananCountOutputTypeCountDetailPesananArgs;
    testimoni?: boolean | PesananCountOutputTypeCountTestimoniArgs;
};
/**
 * PesananCountOutputType without action
 */
export type PesananCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananCountOutputType
     */
    select?: Prisma.PesananCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PesananCountOutputType without action
 */
export type PesananCountOutputTypeCountDetailPesananArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailPesananWhereInput;
};
/**
 * PesananCountOutputType without action
 */
export type PesananCountOutputTypeCountTestimoniArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimoniWhereInput;
};
export type PesananSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    kode_pesanan?: boolean;
    nama_penerima?: boolean;
    email?: boolean;
    no_hp?: boolean;
    alamat?: boolean;
    kota?: boolean;
    provinsi?: boolean;
    kode_pos?: boolean;
    catatan?: boolean;
    total_harga?: boolean;
    metode_pembayaran?: boolean;
    status?: boolean;
    tanggal_pesanan?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    detailPesanan?: boolean | Prisma.Pesanan$detailPesananArgs<ExtArgs>;
    testimoni?: boolean | Prisma.Pesanan$testimoniArgs<ExtArgs>;
    _count?: boolean | Prisma.PesananCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pesanan"]>;
export type PesananSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    kode_pesanan?: boolean;
    nama_penerima?: boolean;
    email?: boolean;
    no_hp?: boolean;
    alamat?: boolean;
    kota?: boolean;
    provinsi?: boolean;
    kode_pos?: boolean;
    catatan?: boolean;
    total_harga?: boolean;
    metode_pembayaran?: boolean;
    status?: boolean;
    tanggal_pesanan?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pesanan"]>;
export type PesananSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    kode_pesanan?: boolean;
    nama_penerima?: boolean;
    email?: boolean;
    no_hp?: boolean;
    alamat?: boolean;
    kota?: boolean;
    provinsi?: boolean;
    kode_pos?: boolean;
    catatan?: boolean;
    total_harga?: boolean;
    metode_pembayaran?: boolean;
    status?: boolean;
    tanggal_pesanan?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pesanan"]>;
export type PesananSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    kode_pesanan?: boolean;
    nama_penerima?: boolean;
    email?: boolean;
    no_hp?: boolean;
    alamat?: boolean;
    kota?: boolean;
    provinsi?: boolean;
    kode_pos?: boolean;
    catatan?: boolean;
    total_harga?: boolean;
    metode_pembayaran?: boolean;
    status?: boolean;
    tanggal_pesanan?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type PesananOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "kode_pesanan" | "nama_penerima" | "email" | "no_hp" | "alamat" | "kota" | "provinsi" | "kode_pos" | "catatan" | "total_harga" | "metode_pembayaran" | "status" | "tanggal_pesanan" | "created_at" | "updated_at", ExtArgs["result"]["pesanan"]>;
export type PesananInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    detailPesanan?: boolean | Prisma.Pesanan$detailPesananArgs<ExtArgs>;
    testimoni?: boolean | Prisma.Pesanan$testimoniArgs<ExtArgs>;
    _count?: boolean | Prisma.PesananCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PesananIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PesananIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PesananPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pesanan";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        detailPesanan: Prisma.$DetailPesananPayload<ExtArgs>[];
        testimoni: Prisma.$TestimoniPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number;
        kode_pesanan: string;
        nama_penerima: string;
        email: string | null;
        no_hp: string;
        alamat: string;
        kota: string;
        provinsi: string;
        kode_pos: string;
        catatan: string | null;
        total_harga: runtime.Decimal;
        metode_pembayaran: string;
        status: $Enums.StatusPesanan;
        tanggal_pesanan: Date;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["pesanan"]>;
    composites: {};
};
export type PesananGetPayload<S extends boolean | null | undefined | PesananDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PesananPayload, S>;
export type PesananCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PesananCountAggregateInputType | true;
};
export interface PesananDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pesanan'];
        meta: {
            name: 'Pesanan';
        };
    };
    /**
     * Find zero or one Pesanan that matches the filter.
     * @param {PesananFindUniqueArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesananFindUniqueArgs>(args: Prisma.SelectSubset<T, PesananFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesananFindUniqueOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesananFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesananFindFirstArgs>(args?: Prisma.SelectSubset<T, PesananFindFirstArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesananFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PesananFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesanans
     * const pesanans = await prisma.pesanan.findMany()
     *
     * // Get first 10 Pesanans
     * const pesanans = await prisma.pesanan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pesananWithIdOnly = await prisma.pesanan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PesananFindManyArgs>(args?: Prisma.SelectSubset<T, PesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pesanan.
     * @param {PesananCreateArgs} args - Arguments to create a Pesanan.
     * @example
     * // Create one Pesanan
     * const Pesanan = await prisma.pesanan.create({
     *   data: {
     *     // ... data to create a Pesanan
     *   }
     * })
     *
     */
    create<T extends PesananCreateArgs>(args: Prisma.SelectSubset<T, PesananCreateArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pesanans.
     * @param {PesananCreateManyArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PesananCreateManyArgs>(args?: Prisma.SelectSubset<T, PesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pesanans and returns the data saved in the database.
     * @param {PesananCreateManyAndReturnArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pesanans and only return the `id`
     * const pesananWithIdOnly = await prisma.pesanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PesananCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pesanan.
     * @param {PesananDeleteArgs} args - Arguments to delete one Pesanan.
     * @example
     * // Delete one Pesanan
     * const Pesanan = await prisma.pesanan.delete({
     *   where: {
     *     // ... filter to delete one Pesanan
     *   }
     * })
     *
     */
    delete<T extends PesananDeleteArgs>(args: Prisma.SelectSubset<T, PesananDeleteArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pesanan.
     * @param {PesananUpdateArgs} args - Arguments to update one Pesanan.
     * @example
     * // Update one Pesanan
     * const pesanan = await prisma.pesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PesananUpdateArgs>(args: Prisma.SelectSubset<T, PesananUpdateArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pesanans.
     * @param {PesananDeleteManyArgs} args - Arguments to filter Pesanans to delete.
     * @example
     * // Delete a few Pesanans
     * const { count } = await prisma.pesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PesananDeleteManyArgs>(args?: Prisma.SelectSubset<T, PesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PesananUpdateManyArgs>(args: Prisma.SelectSubset<T, PesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pesanans and returns the data updated in the database.
     * @param {PesananUpdateManyAndReturnArgs} args - Arguments to update many Pesanans.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pesanans and only return the `id`
     * const pesananWithIdOnly = await prisma.pesanan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PesananUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PesananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pesanan.
     * @param {PesananUpsertArgs} args - Arguments to update or create a Pesanan.
     * @example
     * // Update or create a Pesanan
     * const pesanan = await prisma.pesanan.upsert({
     *   create: {
     *     // ... data to create a Pesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesanan we want to update
     *   }
     * })
     */
    upsert<T extends PesananUpsertArgs>(args: Prisma.SelectSubset<T, PesananUpsertArgs<ExtArgs>>): Prisma.Prisma__PesananClient<runtime.Types.Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananCountArgs} args - Arguments to filter Pesanans to count.
     * @example
     * // Count the number of Pesanans
     * const count = await prisma.pesanan.count({
     *   where: {
     *     // ... the filter for the Pesanans we want to count
     *   }
     * })
    **/
    count<T extends PesananCountArgs>(args?: Prisma.Subset<T, PesananCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PesananCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesananAggregateArgs>(args: Prisma.Subset<T, PesananAggregateArgs>): Prisma.PrismaPromise<GetPesananAggregateType<T>>;
    /**
     * Group by Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PesananGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PesananGroupByArgs['orderBy'];
    } : {
        orderBy?: PesananGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pesanan model
     */
    readonly fields: PesananFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Pesanan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PesananClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detailPesanan<T extends Prisma.Pesanan$detailPesananArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pesanan$detailPesananArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailPesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testimoni<T extends Prisma.Pesanan$testimoniArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pesanan$testimoniArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimoniPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Pesanan model
 */
export interface PesananFieldRefs {
    readonly id: Prisma.FieldRef<"Pesanan", 'Int'>;
    readonly user_id: Prisma.FieldRef<"Pesanan", 'Int'>;
    readonly kode_pesanan: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly nama_penerima: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly email: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly no_hp: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly alamat: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly kota: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly provinsi: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly kode_pos: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly catatan: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly total_harga: Prisma.FieldRef<"Pesanan", 'Decimal'>;
    readonly metode_pembayaran: Prisma.FieldRef<"Pesanan", 'String'>;
    readonly status: Prisma.FieldRef<"Pesanan", 'StatusPesanan'>;
    readonly tanggal_pesanan: Prisma.FieldRef<"Pesanan", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Pesanan", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Pesanan", 'DateTime'>;
}
/**
 * Pesanan findUnique
 */
export type PesananFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * Filter, which Pesanan to fetch.
     */
    where: Prisma.PesananWhereUniqueInput;
};
/**
 * Pesanan findUniqueOrThrow
 */
export type PesananFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * Filter, which Pesanan to fetch.
     */
    where: Prisma.PesananWhereUniqueInput;
};
/**
 * Pesanan findFirst
 */
export type PesananFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: Prisma.PesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Prisma.PesananOrderByWithRelationInput | Prisma.PesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pesanans.
     */
    cursor?: Prisma.PesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pesanans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pesanans.
     */
    distinct?: Prisma.PesananScalarFieldEnum | Prisma.PesananScalarFieldEnum[];
};
/**
 * Pesanan findFirstOrThrow
 */
export type PesananFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: Prisma.PesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Prisma.PesananOrderByWithRelationInput | Prisma.PesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pesanans.
     */
    cursor?: Prisma.PesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pesanans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pesanans.
     */
    distinct?: Prisma.PesananScalarFieldEnum | Prisma.PesananScalarFieldEnum[];
};
/**
 * Pesanan findMany
 */
export type PesananFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * Filter, which Pesanans to fetch.
     */
    where?: Prisma.PesananWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Prisma.PesananOrderByWithRelationInput | Prisma.PesananOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pesanans.
     */
    cursor?: Prisma.PesananWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pesanans.
     */
    skip?: number;
    distinct?: Prisma.PesananScalarFieldEnum | Prisma.PesananScalarFieldEnum[];
};
/**
 * Pesanan create
 */
export type PesananCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pesanan.
     */
    data: Prisma.XOR<Prisma.PesananCreateInput, Prisma.PesananUncheckedCreateInput>;
};
/**
 * Pesanan createMany
 */
export type PesananCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesanans.
     */
    data: Prisma.PesananCreateManyInput | Prisma.PesananCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pesanan createManyAndReturn
 */
export type PesananCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * The data used to create many Pesanans.
     */
    data: Prisma.PesananCreateManyInput | Prisma.PesananCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Pesanan update
 */
export type PesananUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pesanan.
     */
    data: Prisma.XOR<Prisma.PesananUpdateInput, Prisma.PesananUncheckedUpdateInput>;
    /**
     * Choose, which Pesanan to update.
     */
    where: Prisma.PesananWhereUniqueInput;
};
/**
 * Pesanan updateMany
 */
export type PesananUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesanans.
     */
    data: Prisma.XOR<Prisma.PesananUpdateManyMutationInput, Prisma.PesananUncheckedUpdateManyInput>;
    /**
     * Filter which Pesanans to update
     */
    where?: Prisma.PesananWhereInput;
    /**
     * Limit how many Pesanans to update.
     */
    limit?: number;
};
/**
 * Pesanan updateManyAndReturn
 */
export type PesananUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * The data used to update Pesanans.
     */
    data: Prisma.XOR<Prisma.PesananUpdateManyMutationInput, Prisma.PesananUncheckedUpdateManyInput>;
    /**
     * Filter which Pesanans to update
     */
    where?: Prisma.PesananWhereInput;
    /**
     * Limit how many Pesanans to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Pesanan upsert
 */
export type PesananUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pesanan to update in case it exists.
     */
    where: Prisma.PesananWhereUniqueInput;
    /**
     * In case the Pesanan found by the `where` argument doesn't exist, create a new Pesanan with this data.
     */
    create: Prisma.XOR<Prisma.PesananCreateInput, Prisma.PesananUncheckedCreateInput>;
    /**
     * In case the Pesanan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PesananUpdateInput, Prisma.PesananUncheckedUpdateInput>;
};
/**
 * Pesanan delete
 */
export type PesananDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
    /**
     * Filter which Pesanan to delete.
     */
    where: Prisma.PesananWhereUniqueInput;
};
/**
 * Pesanan deleteMany
 */
export type PesananDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanans to delete
     */
    where?: Prisma.PesananWhereInput;
    /**
     * Limit how many Pesanans to delete.
     */
    limit?: number;
};
/**
 * Pesanan.detailPesanan
 */
export type Pesanan$detailPesananArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Pesanan.testimoni
 */
export type Pesanan$testimoniArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Pesanan without action
 */
export type PesananDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: Prisma.PesananSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: Prisma.PesananOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PesananInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Pesanan.d.ts.map