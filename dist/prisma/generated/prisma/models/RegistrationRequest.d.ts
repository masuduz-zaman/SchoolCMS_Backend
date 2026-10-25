import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model RegistrationRequest
 *
 */
export type RegistrationRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$RegistrationRequestPayload>;
export type AggregateRegistrationRequest = {
    _count: RegistrationRequestCountAggregateOutputType | null;
    _min: RegistrationRequestMinAggregateOutputType | null;
    _max: RegistrationRequestMaxAggregateOutputType | null;
};
export type RegistrationRequestMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    requestType: $Enums.RequestType | null;
    status: $Enums.RequestStatus | null;
    classId: string | null;
    parentPhone: string | null;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RegistrationRequestMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    requestType: $Enums.RequestType | null;
    status: $Enums.RequestStatus | null;
    classId: string | null;
    parentPhone: string | null;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RegistrationRequestCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    passwordHash: number;
    requestType: number;
    status: number;
    classId: number;
    parentPhone: number;
    reviewNote: number;
    reviewedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RegistrationRequestMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    requestType?: true;
    status?: true;
    classId?: true;
    parentPhone?: true;
    reviewNote?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RegistrationRequestMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    requestType?: true;
    status?: true;
    classId?: true;
    parentPhone?: true;
    reviewNote?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RegistrationRequestCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    requestType?: true;
    status?: true;
    classId?: true;
    parentPhone?: true;
    reviewNote?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RegistrationRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationRequest to aggregate.
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RegistrationRequests to fetch.
     */
    orderBy?: Prisma.RegistrationRequestOrderByWithRelationInput | Prisma.RegistrationRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RegistrationRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RegistrationRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RegistrationRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RegistrationRequests
    **/
    _count?: true | RegistrationRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationRequestMaxAggregateInputType;
};
export type GetRegistrationRequestAggregateType<T extends RegistrationRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateRegistrationRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegistrationRequest[P]> : Prisma.GetScalarType<T[P], AggregateRegistrationRequest[P]>;
};
export type RegistrationRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationRequestWhereInput;
    orderBy?: Prisma.RegistrationRequestOrderByWithAggregationInput | Prisma.RegistrationRequestOrderByWithAggregationInput[];
    by: Prisma.RegistrationRequestScalarFieldEnum[] | Prisma.RegistrationRequestScalarFieldEnum;
    having?: Prisma.RegistrationRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegistrationRequestCountAggregateInputType | true;
    _min?: RegistrationRequestMinAggregateInputType;
    _max?: RegistrationRequestMaxAggregateInputType;
};
export type RegistrationRequestGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status: $Enums.RequestStatus;
    classId: string | null;
    parentPhone: string | null;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RegistrationRequestCountAggregateOutputType | null;
    _min: RegistrationRequestMinAggregateOutputType | null;
    _max: RegistrationRequestMaxAggregateOutputType | null;
};
export type GetRegistrationRequestGroupByPayload<T extends RegistrationRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegistrationRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegistrationRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegistrationRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegistrationRequestGroupByOutputType[P]>;
}>>;
export type RegistrationRequestWhereInput = {
    AND?: Prisma.RegistrationRequestWhereInput | Prisma.RegistrationRequestWhereInput[];
    OR?: Prisma.RegistrationRequestWhereInput[];
    NOT?: Prisma.RegistrationRequestWhereInput | Prisma.RegistrationRequestWhereInput[];
    id?: Prisma.StringFilter<"RegistrationRequest"> | string;
    name?: Prisma.StringFilter<"RegistrationRequest"> | string;
    email?: Prisma.StringFilter<"RegistrationRequest"> | string;
    phone?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    passwordHash?: Prisma.StringFilter<"RegistrationRequest"> | string;
    requestType?: Prisma.EnumRequestTypeFilter<"RegistrationRequest"> | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFilter<"RegistrationRequest"> | $Enums.RequestStatus;
    classId?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    parentPhone?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    reviewNote?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RegistrationRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RegistrationRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RegistrationRequest"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassNullableScalarRelationFilter, Prisma.ClassWhereInput> | null;
};
export type RegistrationRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    classId?: Prisma.SortOrderInput | Prisma.SortOrder;
    parentPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    class?: Prisma.ClassOrderByWithRelationInput;
};
export type RegistrationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RegistrationRequestWhereInput | Prisma.RegistrationRequestWhereInput[];
    OR?: Prisma.RegistrationRequestWhereInput[];
    NOT?: Prisma.RegistrationRequestWhereInput | Prisma.RegistrationRequestWhereInput[];
    name?: Prisma.StringFilter<"RegistrationRequest"> | string;
    email?: Prisma.StringFilter<"RegistrationRequest"> | string;
    phone?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    passwordHash?: Prisma.StringFilter<"RegistrationRequest"> | string;
    requestType?: Prisma.EnumRequestTypeFilter<"RegistrationRequest"> | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFilter<"RegistrationRequest"> | $Enums.RequestStatus;
    classId?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    parentPhone?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    reviewNote?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RegistrationRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RegistrationRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RegistrationRequest"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassNullableScalarRelationFilter, Prisma.ClassWhereInput> | null;
}, "id">;
export type RegistrationRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    classId?: Prisma.SortOrderInput | Prisma.SortOrder;
    parentPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RegistrationRequestCountOrderByAggregateInput;
    _max?: Prisma.RegistrationRequestMaxOrderByAggregateInput;
    _min?: Prisma.RegistrationRequestMinOrderByAggregateInput;
};
export type RegistrationRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegistrationRequestScalarWhereWithAggregatesInput | Prisma.RegistrationRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegistrationRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegistrationRequestScalarWhereWithAggregatesInput | Prisma.RegistrationRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RegistrationRequest"> | string;
    name?: Prisma.StringWithAggregatesFilter<"RegistrationRequest"> | string;
    email?: Prisma.StringWithAggregatesFilter<"RegistrationRequest"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"RegistrationRequest"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"RegistrationRequest"> | string;
    requestType?: Prisma.EnumRequestTypeWithAggregatesFilter<"RegistrationRequest"> | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusWithAggregatesFilter<"RegistrationRequest"> | $Enums.RequestStatus;
    classId?: Prisma.StringNullableWithAggregatesFilter<"RegistrationRequest"> | string | null;
    parentPhone?: Prisma.StringNullableWithAggregatesFilter<"RegistrationRequest"> | string | null;
    reviewNote?: Prisma.StringNullableWithAggregatesFilter<"RegistrationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RegistrationRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RegistrationRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RegistrationRequest"> | Date | string;
};
export type RegistrationRequestCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status?: $Enums.RequestStatus;
    parentPhone?: string | null;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class?: Prisma.ClassCreateNestedOneWithoutRegistrationRequestsInput;
};
export type RegistrationRequestUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status?: $Enums.RequestStatus;
    classId?: string | null;
    parentPhone?: string | null;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RegistrationRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneWithoutRegistrationRequestsNestedInput;
};
export type RegistrationRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistrationRequestCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status?: $Enums.RequestStatus;
    classId?: string | null;
    parentPhone?: string | null;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RegistrationRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistrationRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistrationRequestListRelationFilter = {
    every?: Prisma.RegistrationRequestWhereInput;
    some?: Prisma.RegistrationRequestWhereInput;
    none?: Prisma.RegistrationRequestWhereInput;
};
export type RegistrationRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegistrationRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    parentPhone?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RegistrationRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    parentPhone?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RegistrationRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    parentPhone?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RegistrationRequestCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.RegistrationRequestCreateWithoutClassInput, Prisma.RegistrationRequestUncheckedCreateWithoutClassInput> | Prisma.RegistrationRequestCreateWithoutClassInput[] | Prisma.RegistrationRequestUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.RegistrationRequestCreateOrConnectWithoutClassInput | Prisma.RegistrationRequestCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.RegistrationRequestCreateManyClassInputEnvelope;
    connect?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
};
export type RegistrationRequestUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.RegistrationRequestCreateWithoutClassInput, Prisma.RegistrationRequestUncheckedCreateWithoutClassInput> | Prisma.RegistrationRequestCreateWithoutClassInput[] | Prisma.RegistrationRequestUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.RegistrationRequestCreateOrConnectWithoutClassInput | Prisma.RegistrationRequestCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.RegistrationRequestCreateManyClassInputEnvelope;
    connect?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
};
export type RegistrationRequestUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationRequestCreateWithoutClassInput, Prisma.RegistrationRequestUncheckedCreateWithoutClassInput> | Prisma.RegistrationRequestCreateWithoutClassInput[] | Prisma.RegistrationRequestUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.RegistrationRequestCreateOrConnectWithoutClassInput | Prisma.RegistrationRequestCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.RegistrationRequestUpsertWithWhereUniqueWithoutClassInput | Prisma.RegistrationRequestUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.RegistrationRequestCreateManyClassInputEnvelope;
    set?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    disconnect?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    delete?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    connect?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    update?: Prisma.RegistrationRequestUpdateWithWhereUniqueWithoutClassInput | Prisma.RegistrationRequestUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.RegistrationRequestUpdateManyWithWhereWithoutClassInput | Prisma.RegistrationRequestUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.RegistrationRequestScalarWhereInput | Prisma.RegistrationRequestScalarWhereInput[];
};
export type RegistrationRequestUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationRequestCreateWithoutClassInput, Prisma.RegistrationRequestUncheckedCreateWithoutClassInput> | Prisma.RegistrationRequestCreateWithoutClassInput[] | Prisma.RegistrationRequestUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.RegistrationRequestCreateOrConnectWithoutClassInput | Prisma.RegistrationRequestCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.RegistrationRequestUpsertWithWhereUniqueWithoutClassInput | Prisma.RegistrationRequestUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.RegistrationRequestCreateManyClassInputEnvelope;
    set?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    disconnect?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    delete?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    connect?: Prisma.RegistrationRequestWhereUniqueInput | Prisma.RegistrationRequestWhereUniqueInput[];
    update?: Prisma.RegistrationRequestUpdateWithWhereUniqueWithoutClassInput | Prisma.RegistrationRequestUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.RegistrationRequestUpdateManyWithWhereWithoutClassInput | Prisma.RegistrationRequestUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.RegistrationRequestScalarWhereInput | Prisma.RegistrationRequestScalarWhereInput[];
};
export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType;
};
export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type RegistrationRequestCreateWithoutClassInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status?: $Enums.RequestStatus;
    parentPhone?: string | null;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RegistrationRequestUncheckedCreateWithoutClassInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status?: $Enums.RequestStatus;
    parentPhone?: string | null;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RegistrationRequestCreateOrConnectWithoutClassInput = {
    where: Prisma.RegistrationRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationRequestCreateWithoutClassInput, Prisma.RegistrationRequestUncheckedCreateWithoutClassInput>;
};
export type RegistrationRequestCreateManyClassInputEnvelope = {
    data: Prisma.RegistrationRequestCreateManyClassInput | Prisma.RegistrationRequestCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type RegistrationRequestUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.RegistrationRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistrationRequestUpdateWithoutClassInput, Prisma.RegistrationRequestUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.RegistrationRequestCreateWithoutClassInput, Prisma.RegistrationRequestUncheckedCreateWithoutClassInput>;
};
export type RegistrationRequestUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.RegistrationRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistrationRequestUpdateWithoutClassInput, Prisma.RegistrationRequestUncheckedUpdateWithoutClassInput>;
};
export type RegistrationRequestUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.RegistrationRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistrationRequestUpdateManyMutationInput, Prisma.RegistrationRequestUncheckedUpdateManyWithoutClassInput>;
};
export type RegistrationRequestScalarWhereInput = {
    AND?: Prisma.RegistrationRequestScalarWhereInput | Prisma.RegistrationRequestScalarWhereInput[];
    OR?: Prisma.RegistrationRequestScalarWhereInput[];
    NOT?: Prisma.RegistrationRequestScalarWhereInput | Prisma.RegistrationRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"RegistrationRequest"> | string;
    name?: Prisma.StringFilter<"RegistrationRequest"> | string;
    email?: Prisma.StringFilter<"RegistrationRequest"> | string;
    phone?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    passwordHash?: Prisma.StringFilter<"RegistrationRequest"> | string;
    requestType?: Prisma.EnumRequestTypeFilter<"RegistrationRequest"> | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFilter<"RegistrationRequest"> | $Enums.RequestStatus;
    classId?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    parentPhone?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    reviewNote?: Prisma.StringNullableFilter<"RegistrationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RegistrationRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RegistrationRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RegistrationRequest"> | Date | string;
};
export type RegistrationRequestCreateManyClassInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    requestType: $Enums.RequestType;
    status?: $Enums.RequestStatus;
    parentPhone?: string | null;
    reviewNote?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RegistrationRequestUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistrationRequestUncheckedUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistrationRequestUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    parentPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistrationRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    requestType?: boolean;
    status?: boolean;
    classId?: boolean;
    parentPhone?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    class?: boolean | Prisma.RegistrationRequest$classArgs<ExtArgs>;
}, ExtArgs["result"]["registrationRequest"]>;
export type RegistrationRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    requestType?: boolean;
    status?: boolean;
    classId?: boolean;
    parentPhone?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    class?: boolean | Prisma.RegistrationRequest$classArgs<ExtArgs>;
}, ExtArgs["result"]["registrationRequest"]>;
export type RegistrationRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    requestType?: boolean;
    status?: boolean;
    classId?: boolean;
    parentPhone?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    class?: boolean | Prisma.RegistrationRequest$classArgs<ExtArgs>;
}, ExtArgs["result"]["registrationRequest"]>;
export type RegistrationRequestSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    requestType?: boolean;
    status?: boolean;
    classId?: boolean;
    parentPhone?: boolean;
    reviewNote?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RegistrationRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "requestType" | "status" | "classId" | "parentPhone" | "reviewNote" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["registrationRequest"]>;
export type RegistrationRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.RegistrationRequest$classArgs<ExtArgs>;
};
export type RegistrationRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.RegistrationRequest$classArgs<ExtArgs>;
};
export type RegistrationRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.RegistrationRequest$classArgs<ExtArgs>;
};
export type $RegistrationRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegistrationRequest";
    objects: {
        class: Prisma.$ClassPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        requestType: $Enums.RequestType;
        status: $Enums.RequestStatus;
        classId: string | null;
        parentPhone: string | null;
        reviewNote: string | null;
        reviewedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["registrationRequest"]>;
    composites: {};
};
export type RegistrationRequestGetPayload<S extends boolean | null | undefined | RegistrationRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload, S>;
export type RegistrationRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegistrationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegistrationRequestCountAggregateInputType | true;
};
export interface RegistrationRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegistrationRequest'];
        meta: {
            name: 'RegistrationRequest';
        };
    };
    /**
     * Find zero or one RegistrationRequest that matches the filter.
     * @param {RegistrationRequestFindUniqueArgs} args - Arguments to find a RegistrationRequest
     * @example
     * // Get one RegistrationRequest
     * const registrationRequest = await prisma.registrationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, RegistrationRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RegistrationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationRequestFindUniqueOrThrowArgs} args - Arguments to find a RegistrationRequest
     * @example
     * // Get one RegistrationRequest
     * const registrationRequest = await prisma.registrationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegistrationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RegistrationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestFindFirstArgs} args - Arguments to find a RegistrationRequest
     * @example
     * // Get one RegistrationRequest
     * const registrationRequest = await prisma.registrationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, RegistrationRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RegistrationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestFindFirstOrThrowArgs} args - Arguments to find a RegistrationRequest
     * @example
     * // Get one RegistrationRequest
     * const registrationRequest = await prisma.registrationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegistrationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RegistrationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationRequests
     * const registrationRequests = await prisma.registrationRequest.findMany()
     *
     * // Get first 10 RegistrationRequests
     * const registrationRequests = await prisma.registrationRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const registrationRequestWithIdOnly = await prisma.registrationRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RegistrationRequestFindManyArgs>(args?: Prisma.SelectSubset<T, RegistrationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RegistrationRequest.
     * @param {RegistrationRequestCreateArgs} args - Arguments to create a RegistrationRequest.
     * @example
     * // Create one RegistrationRequest
     * const RegistrationRequest = await prisma.registrationRequest.create({
     *   data: {
     *     // ... data to create a RegistrationRequest
     *   }
     * })
     *
     */
    create<T extends RegistrationRequestCreateArgs>(args: Prisma.SelectSubset<T, RegistrationRequestCreateArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RegistrationRequests.
     * @param {RegistrationRequestCreateManyArgs} args - Arguments to create many RegistrationRequests.
     * @example
     * // Create many RegistrationRequests
     * const registrationRequest = await prisma.registrationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RegistrationRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, RegistrationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RegistrationRequests and returns the data saved in the database.
     * @param {RegistrationRequestCreateManyAndReturnArgs} args - Arguments to create many RegistrationRequests.
     * @example
     * // Create many RegistrationRequests
     * const registrationRequest = await prisma.registrationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RegistrationRequests and only return the `id`
     * const registrationRequestWithIdOnly = await prisma.registrationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RegistrationRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegistrationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RegistrationRequest.
     * @param {RegistrationRequestDeleteArgs} args - Arguments to delete one RegistrationRequest.
     * @example
     * // Delete one RegistrationRequest
     * const RegistrationRequest = await prisma.registrationRequest.delete({
     *   where: {
     *     // ... filter to delete one RegistrationRequest
     *   }
     * })
     *
     */
    delete<T extends RegistrationRequestDeleteArgs>(args: Prisma.SelectSubset<T, RegistrationRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RegistrationRequest.
     * @param {RegistrationRequestUpdateArgs} args - Arguments to update one RegistrationRequest.
     * @example
     * // Update one RegistrationRequest
     * const registrationRequest = await prisma.registrationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RegistrationRequestUpdateArgs>(args: Prisma.SelectSubset<T, RegistrationRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RegistrationRequests.
     * @param {RegistrationRequestDeleteManyArgs} args - Arguments to filter RegistrationRequests to delete.
     * @example
     * // Delete a few RegistrationRequests
     * const { count } = await prisma.registrationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RegistrationRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegistrationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RegistrationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationRequests
     * const registrationRequest = await prisma.registrationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RegistrationRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, RegistrationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RegistrationRequests and returns the data updated in the database.
     * @param {RegistrationRequestUpdateManyAndReturnArgs} args - Arguments to update many RegistrationRequests.
     * @example
     * // Update many RegistrationRequests
     * const registrationRequest = await prisma.registrationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RegistrationRequests and only return the `id`
     * const registrationRequestWithIdOnly = await prisma.registrationRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistrationRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegistrationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RegistrationRequest.
     * @param {RegistrationRequestUpsertArgs} args - Arguments to update or create a RegistrationRequest.
     * @example
     * // Update or create a RegistrationRequest
     * const registrationRequest = await prisma.registrationRequest.upsert({
     *   create: {
     *     // ... data to create a RegistrationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationRequest we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationRequestUpsertArgs>(args: Prisma.SelectSubset<T, RegistrationRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__RegistrationRequestClient<runtime.Types.Result.GetResult<Prisma.$RegistrationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RegistrationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestCountArgs} args - Arguments to filter RegistrationRequests to count.
     * @example
     * // Count the number of RegistrationRequests
     * const count = await prisma.registrationRequest.count({
     *   where: {
     *     // ... the filter for the RegistrationRequests we want to count
     *   }
     * })
    **/
    count<T extends RegistrationRequestCountArgs>(args?: Prisma.Subset<T, RegistrationRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegistrationRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RegistrationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationRequestAggregateArgs>(args: Prisma.Subset<T, RegistrationRequestAggregateArgs>): Prisma.PrismaPromise<GetRegistrationRequestAggregateType<T>>;
    /**
     * Group by RegistrationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RegistrationRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegistrationRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: RegistrationRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegistrationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RegistrationRequest model
     */
    readonly fields: RegistrationRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RegistrationRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RegistrationRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class<T extends Prisma.RegistrationRequest$classArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegistrationRequest$classArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the RegistrationRequest model
 */
export interface RegistrationRequestFieldRefs {
    readonly id: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly name: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly email: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly phone: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly requestType: Prisma.FieldRef<"RegistrationRequest", 'RequestType'>;
    readonly status: Prisma.FieldRef<"RegistrationRequest", 'RequestStatus'>;
    readonly classId: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly parentPhone: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly reviewNote: Prisma.FieldRef<"RegistrationRequest", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"RegistrationRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RegistrationRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RegistrationRequest", 'DateTime'>;
}
/**
 * RegistrationRequest findUnique
 */
export type RegistrationRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * Filter, which RegistrationRequest to fetch.
     */
    where: Prisma.RegistrationRequestWhereUniqueInput;
};
/**
 * RegistrationRequest findUniqueOrThrow
 */
export type RegistrationRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * Filter, which RegistrationRequest to fetch.
     */
    where: Prisma.RegistrationRequestWhereUniqueInput;
};
/**
 * RegistrationRequest findFirst
 */
export type RegistrationRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * Filter, which RegistrationRequest to fetch.
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RegistrationRequests to fetch.
     */
    orderBy?: Prisma.RegistrationRequestOrderByWithRelationInput | Prisma.RegistrationRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RegistrationRequests.
     */
    cursor?: Prisma.RegistrationRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RegistrationRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RegistrationRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RegistrationRequests.
     */
    distinct?: Prisma.RegistrationRequestScalarFieldEnum | Prisma.RegistrationRequestScalarFieldEnum[];
};
/**
 * RegistrationRequest findFirstOrThrow
 */
export type RegistrationRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * Filter, which RegistrationRequest to fetch.
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RegistrationRequests to fetch.
     */
    orderBy?: Prisma.RegistrationRequestOrderByWithRelationInput | Prisma.RegistrationRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RegistrationRequests.
     */
    cursor?: Prisma.RegistrationRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RegistrationRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RegistrationRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RegistrationRequests.
     */
    distinct?: Prisma.RegistrationRequestScalarFieldEnum | Prisma.RegistrationRequestScalarFieldEnum[];
};
/**
 * RegistrationRequest findMany
 */
export type RegistrationRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * Filter, which RegistrationRequests to fetch.
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RegistrationRequests to fetch.
     */
    orderBy?: Prisma.RegistrationRequestOrderByWithRelationInput | Prisma.RegistrationRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RegistrationRequests.
     */
    cursor?: Prisma.RegistrationRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RegistrationRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RegistrationRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RegistrationRequests.
     */
    distinct?: Prisma.RegistrationRequestScalarFieldEnum | Prisma.RegistrationRequestScalarFieldEnum[];
};
/**
 * RegistrationRequest create
 */
export type RegistrationRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a RegistrationRequest.
     */
    data: Prisma.XOR<Prisma.RegistrationRequestCreateInput, Prisma.RegistrationRequestUncheckedCreateInput>;
};
/**
 * RegistrationRequest createMany
 */
export type RegistrationRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationRequests.
     */
    data: Prisma.RegistrationRequestCreateManyInput | Prisma.RegistrationRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RegistrationRequest createManyAndReturn
 */
export type RegistrationRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many RegistrationRequests.
     */
    data: Prisma.RegistrationRequestCreateManyInput | Prisma.RegistrationRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RegistrationRequest update
 */
export type RegistrationRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a RegistrationRequest.
     */
    data: Prisma.XOR<Prisma.RegistrationRequestUpdateInput, Prisma.RegistrationRequestUncheckedUpdateInput>;
    /**
     * Choose, which RegistrationRequest to update.
     */
    where: Prisma.RegistrationRequestWhereUniqueInput;
};
/**
 * RegistrationRequest updateMany
 */
export type RegistrationRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationRequests.
     */
    data: Prisma.XOR<Prisma.RegistrationRequestUpdateManyMutationInput, Prisma.RegistrationRequestUncheckedUpdateManyInput>;
    /**
     * Filter which RegistrationRequests to update
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * Limit how many RegistrationRequests to update.
     */
    limit?: number;
};
/**
 * RegistrationRequest updateManyAndReturn
 */
export type RegistrationRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * The data used to update RegistrationRequests.
     */
    data: Prisma.XOR<Prisma.RegistrationRequestUpdateManyMutationInput, Prisma.RegistrationRequestUncheckedUpdateManyInput>;
    /**
     * Filter which RegistrationRequests to update
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * Limit how many RegistrationRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RegistrationRequest upsert
 */
export type RegistrationRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the RegistrationRequest to update in case it exists.
     */
    where: Prisma.RegistrationRequestWhereUniqueInput;
    /**
     * In case the RegistrationRequest found by the `where` argument doesn't exist, create a new RegistrationRequest with this data.
     */
    create: Prisma.XOR<Prisma.RegistrationRequestCreateInput, Prisma.RegistrationRequestUncheckedCreateInput>;
    /**
     * In case the RegistrationRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RegistrationRequestUpdateInput, Prisma.RegistrationRequestUncheckedUpdateInput>;
};
/**
 * RegistrationRequest delete
 */
export type RegistrationRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
    /**
     * Filter which RegistrationRequest to delete.
     */
    where: Prisma.RegistrationRequestWhereUniqueInput;
};
/**
 * RegistrationRequest deleteMany
 */
export type RegistrationRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationRequests to delete
     */
    where?: Prisma.RegistrationRequestWhereInput;
    /**
     * Limit how many RegistrationRequests to delete.
     */
    limit?: number;
};
/**
 * RegistrationRequest.class
 */
export type RegistrationRequest$classArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: Prisma.ClassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Class
     */
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where?: Prisma.ClassWhereInput;
};
/**
 * RegistrationRequest without action
 */
export type RegistrationRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationRequest
     */
    select?: Prisma.RegistrationRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RegistrationRequest
     */
    omit?: Prisma.RegistrationRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegistrationRequestInclude<ExtArgs> | null;
};
//# sourceMappingURL=RegistrationRequest.d.ts.map