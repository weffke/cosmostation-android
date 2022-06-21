// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: osmosis/txfees/v1beta1/genesis.proto

package osmosis.txfees.v1beta1;

public final class Genesis {
  private Genesis() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface GenesisStateOrBuilder extends
      // @@protoc_insertion_point(interface_extends:osmosis.txfees.v1beta1.GenesisState)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string basedenom = 1;</code>
     * @return The basedenom.
     */
    java.lang.String getBasedenom();
    /**
     * <code>string basedenom = 1;</code>
     * @return The bytes for basedenom.
     */
    com.google.protobuf.ByteString
        getBasedenomBytes();

    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    java.util.List<osmosis.txfees.v1beta1.Feetoken.FeeToken> 
        getFeetokensList();
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    osmosis.txfees.v1beta1.Feetoken.FeeToken getFeetokens(int index);
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    int getFeetokensCount();
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    java.util.List<? extends osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder> 
        getFeetokensOrBuilderList();
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder getFeetokensOrBuilder(
        int index);
  }
  /**
   * <pre>
   * GenesisState defines the txfees module's genesis state.
   * </pre>
   *
   * Protobuf type {@code osmosis.txfees.v1beta1.GenesisState}
   */
  public static final class GenesisState extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:osmosis.txfees.v1beta1.GenesisState)
      GenesisStateOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use GenesisState.newBuilder() to construct.
    private GenesisState(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private GenesisState() {
      basedenom_ = "";
      feetokens_ = java.util.Collections.emptyList();
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new GenesisState();
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private GenesisState(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              basedenom_ = s;
              break;
            }
            case 18: {
              if (!((mutable_bitField0_ & 0x00000001) != 0)) {
                feetokens_ = new java.util.ArrayList<osmosis.txfees.v1beta1.Feetoken.FeeToken>();
                mutable_bitField0_ |= 0x00000001;
              }
              feetokens_.add(
                  input.readMessage(osmosis.txfees.v1beta1.Feetoken.FeeToken.parser(), extensionRegistry));
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        if (((mutable_bitField0_ & 0x00000001) != 0)) {
          feetokens_ = java.util.Collections.unmodifiableList(feetokens_);
        }
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return osmosis.txfees.v1beta1.Genesis.internal_static_osmosis_txfees_v1beta1_GenesisState_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return osmosis.txfees.v1beta1.Genesis.internal_static_osmosis_txfees_v1beta1_GenesisState_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              osmosis.txfees.v1beta1.Genesis.GenesisState.class, osmosis.txfees.v1beta1.Genesis.GenesisState.Builder.class);
    }

    public static final int BASEDENOM_FIELD_NUMBER = 1;
    private volatile java.lang.Object basedenom_;
    /**
     * <code>string basedenom = 1;</code>
     * @return The basedenom.
     */
    @java.lang.Override
    public java.lang.String getBasedenom() {
      java.lang.Object ref = basedenom_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        basedenom_ = s;
        return s;
      }
    }
    /**
     * <code>string basedenom = 1;</code>
     * @return The bytes for basedenom.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getBasedenomBytes() {
      java.lang.Object ref = basedenom_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        basedenom_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int FEETOKENS_FIELD_NUMBER = 2;
    private java.util.List<osmosis.txfees.v1beta1.Feetoken.FeeToken> feetokens_;
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    @java.lang.Override
    public java.util.List<osmosis.txfees.v1beta1.Feetoken.FeeToken> getFeetokensList() {
      return feetokens_;
    }
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    @java.lang.Override
    public java.util.List<? extends osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder> 
        getFeetokensOrBuilderList() {
      return feetokens_;
    }
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    @java.lang.Override
    public int getFeetokensCount() {
      return feetokens_.size();
    }
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    @java.lang.Override
    public osmosis.txfees.v1beta1.Feetoken.FeeToken getFeetokens(int index) {
      return feetokens_.get(index);
    }
    /**
     * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
     */
    @java.lang.Override
    public osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder getFeetokensOrBuilder(
        int index) {
      return feetokens_.get(index);
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getBasedenomBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, basedenom_);
      }
      for (int i = 0; i < feetokens_.size(); i++) {
        output.writeMessage(2, feetokens_.get(i));
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getBasedenomBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, basedenom_);
      }
      for (int i = 0; i < feetokens_.size(); i++) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(2, feetokens_.get(i));
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof osmosis.txfees.v1beta1.Genesis.GenesisState)) {
        return super.equals(obj);
      }
      osmosis.txfees.v1beta1.Genesis.GenesisState other = (osmosis.txfees.v1beta1.Genesis.GenesisState) obj;

      if (!getBasedenom()
          .equals(other.getBasedenom())) return false;
      if (!getFeetokensList()
          .equals(other.getFeetokensList())) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + BASEDENOM_FIELD_NUMBER;
      hash = (53 * hash) + getBasedenom().hashCode();
      if (getFeetokensCount() > 0) {
        hash = (37 * hash) + FEETOKENS_FIELD_NUMBER;
        hash = (53 * hash) + getFeetokensList().hashCode();
      }
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static osmosis.txfees.v1beta1.Genesis.GenesisState parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(osmosis.txfees.v1beta1.Genesis.GenesisState prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * <pre>
     * GenesisState defines the txfees module's genesis state.
     * </pre>
     *
     * Protobuf type {@code osmosis.txfees.v1beta1.GenesisState}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:osmosis.txfees.v1beta1.GenesisState)
        osmosis.txfees.v1beta1.Genesis.GenesisStateOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return osmosis.txfees.v1beta1.Genesis.internal_static_osmosis_txfees_v1beta1_GenesisState_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return osmosis.txfees.v1beta1.Genesis.internal_static_osmosis_txfees_v1beta1_GenesisState_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                osmosis.txfees.v1beta1.Genesis.GenesisState.class, osmosis.txfees.v1beta1.Genesis.GenesisState.Builder.class);
      }

      // Construct using osmosis.txfees.v1beta1.Genesis.GenesisState.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
          getFeetokensFieldBuilder();
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        basedenom_ = "";

        if (feetokensBuilder_ == null) {
          feetokens_ = java.util.Collections.emptyList();
          bitField0_ = (bitField0_ & ~0x00000001);
        } else {
          feetokensBuilder_.clear();
        }
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return osmosis.txfees.v1beta1.Genesis.internal_static_osmosis_txfees_v1beta1_GenesisState_descriptor;
      }

      @java.lang.Override
      public osmosis.txfees.v1beta1.Genesis.GenesisState getDefaultInstanceForType() {
        return osmosis.txfees.v1beta1.Genesis.GenesisState.getDefaultInstance();
      }

      @java.lang.Override
      public osmosis.txfees.v1beta1.Genesis.GenesisState build() {
        osmosis.txfees.v1beta1.Genesis.GenesisState result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public osmosis.txfees.v1beta1.Genesis.GenesisState buildPartial() {
        osmosis.txfees.v1beta1.Genesis.GenesisState result = new osmosis.txfees.v1beta1.Genesis.GenesisState(this);
        int from_bitField0_ = bitField0_;
        result.basedenom_ = basedenom_;
        if (feetokensBuilder_ == null) {
          if (((bitField0_ & 0x00000001) != 0)) {
            feetokens_ = java.util.Collections.unmodifiableList(feetokens_);
            bitField0_ = (bitField0_ & ~0x00000001);
          }
          result.feetokens_ = feetokens_;
        } else {
          result.feetokens_ = feetokensBuilder_.build();
        }
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof osmosis.txfees.v1beta1.Genesis.GenesisState) {
          return mergeFrom((osmosis.txfees.v1beta1.Genesis.GenesisState)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(osmosis.txfees.v1beta1.Genesis.GenesisState other) {
        if (other == osmosis.txfees.v1beta1.Genesis.GenesisState.getDefaultInstance()) return this;
        if (!other.getBasedenom().isEmpty()) {
          basedenom_ = other.basedenom_;
          onChanged();
        }
        if (feetokensBuilder_ == null) {
          if (!other.feetokens_.isEmpty()) {
            if (feetokens_.isEmpty()) {
              feetokens_ = other.feetokens_;
              bitField0_ = (bitField0_ & ~0x00000001);
            } else {
              ensureFeetokensIsMutable();
              feetokens_.addAll(other.feetokens_);
            }
            onChanged();
          }
        } else {
          if (!other.feetokens_.isEmpty()) {
            if (feetokensBuilder_.isEmpty()) {
              feetokensBuilder_.dispose();
              feetokensBuilder_ = null;
              feetokens_ = other.feetokens_;
              bitField0_ = (bitField0_ & ~0x00000001);
              feetokensBuilder_ = 
                com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                   getFeetokensFieldBuilder() : null;
            } else {
              feetokensBuilder_.addAllMessages(other.feetokens_);
            }
          }
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        osmosis.txfees.v1beta1.Genesis.GenesisState parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (osmosis.txfees.v1beta1.Genesis.GenesisState) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }
      private int bitField0_;

      private java.lang.Object basedenom_ = "";
      /**
       * <code>string basedenom = 1;</code>
       * @return The basedenom.
       */
      public java.lang.String getBasedenom() {
        java.lang.Object ref = basedenom_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          basedenom_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string basedenom = 1;</code>
       * @return The bytes for basedenom.
       */
      public com.google.protobuf.ByteString
          getBasedenomBytes() {
        java.lang.Object ref = basedenom_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          basedenom_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string basedenom = 1;</code>
       * @param value The basedenom to set.
       * @return This builder for chaining.
       */
      public Builder setBasedenom(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        basedenom_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string basedenom = 1;</code>
       * @return This builder for chaining.
       */
      public Builder clearBasedenom() {
        
        basedenom_ = getDefaultInstance().getBasedenom();
        onChanged();
        return this;
      }
      /**
       * <code>string basedenom = 1;</code>
       * @param value The bytes for basedenom to set.
       * @return This builder for chaining.
       */
      public Builder setBasedenomBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        basedenom_ = value;
        onChanged();
        return this;
      }

      private java.util.List<osmosis.txfees.v1beta1.Feetoken.FeeToken> feetokens_ =
        java.util.Collections.emptyList();
      private void ensureFeetokensIsMutable() {
        if (!((bitField0_ & 0x00000001) != 0)) {
          feetokens_ = new java.util.ArrayList<osmosis.txfees.v1beta1.Feetoken.FeeToken>(feetokens_);
          bitField0_ |= 0x00000001;
         }
      }

      private com.google.protobuf.RepeatedFieldBuilderV3<
          osmosis.txfees.v1beta1.Feetoken.FeeToken, osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder, osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder> feetokensBuilder_;

      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public java.util.List<osmosis.txfees.v1beta1.Feetoken.FeeToken> getFeetokensList() {
        if (feetokensBuilder_ == null) {
          return java.util.Collections.unmodifiableList(feetokens_);
        } else {
          return feetokensBuilder_.getMessageList();
        }
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public int getFeetokensCount() {
        if (feetokensBuilder_ == null) {
          return feetokens_.size();
        } else {
          return feetokensBuilder_.getCount();
        }
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public osmosis.txfees.v1beta1.Feetoken.FeeToken getFeetokens(int index) {
        if (feetokensBuilder_ == null) {
          return feetokens_.get(index);
        } else {
          return feetokensBuilder_.getMessage(index);
        }
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder setFeetokens(
          int index, osmosis.txfees.v1beta1.Feetoken.FeeToken value) {
        if (feetokensBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          ensureFeetokensIsMutable();
          feetokens_.set(index, value);
          onChanged();
        } else {
          feetokensBuilder_.setMessage(index, value);
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder setFeetokens(
          int index, osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder builderForValue) {
        if (feetokensBuilder_ == null) {
          ensureFeetokensIsMutable();
          feetokens_.set(index, builderForValue.build());
          onChanged();
        } else {
          feetokensBuilder_.setMessage(index, builderForValue.build());
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder addFeetokens(osmosis.txfees.v1beta1.Feetoken.FeeToken value) {
        if (feetokensBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          ensureFeetokensIsMutable();
          feetokens_.add(value);
          onChanged();
        } else {
          feetokensBuilder_.addMessage(value);
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder addFeetokens(
          int index, osmosis.txfees.v1beta1.Feetoken.FeeToken value) {
        if (feetokensBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          ensureFeetokensIsMutable();
          feetokens_.add(index, value);
          onChanged();
        } else {
          feetokensBuilder_.addMessage(index, value);
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder addFeetokens(
          osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder builderForValue) {
        if (feetokensBuilder_ == null) {
          ensureFeetokensIsMutable();
          feetokens_.add(builderForValue.build());
          onChanged();
        } else {
          feetokensBuilder_.addMessage(builderForValue.build());
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder addFeetokens(
          int index, osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder builderForValue) {
        if (feetokensBuilder_ == null) {
          ensureFeetokensIsMutable();
          feetokens_.add(index, builderForValue.build());
          onChanged();
        } else {
          feetokensBuilder_.addMessage(index, builderForValue.build());
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder addAllFeetokens(
          java.lang.Iterable<? extends osmosis.txfees.v1beta1.Feetoken.FeeToken> values) {
        if (feetokensBuilder_ == null) {
          ensureFeetokensIsMutable();
          com.google.protobuf.AbstractMessageLite.Builder.addAll(
              values, feetokens_);
          onChanged();
        } else {
          feetokensBuilder_.addAllMessages(values);
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder clearFeetokens() {
        if (feetokensBuilder_ == null) {
          feetokens_ = java.util.Collections.emptyList();
          bitField0_ = (bitField0_ & ~0x00000001);
          onChanged();
        } else {
          feetokensBuilder_.clear();
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public Builder removeFeetokens(int index) {
        if (feetokensBuilder_ == null) {
          ensureFeetokensIsMutable();
          feetokens_.remove(index);
          onChanged();
        } else {
          feetokensBuilder_.remove(index);
        }
        return this;
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder getFeetokensBuilder(
          int index) {
        return getFeetokensFieldBuilder().getBuilder(index);
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder getFeetokensOrBuilder(
          int index) {
        if (feetokensBuilder_ == null) {
          return feetokens_.get(index);  } else {
          return feetokensBuilder_.getMessageOrBuilder(index);
        }
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public java.util.List<? extends osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder> 
           getFeetokensOrBuilderList() {
        if (feetokensBuilder_ != null) {
          return feetokensBuilder_.getMessageOrBuilderList();
        } else {
          return java.util.Collections.unmodifiableList(feetokens_);
        }
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder addFeetokensBuilder() {
        return getFeetokensFieldBuilder().addBuilder(
            osmosis.txfees.v1beta1.Feetoken.FeeToken.getDefaultInstance());
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder addFeetokensBuilder(
          int index) {
        return getFeetokensFieldBuilder().addBuilder(
            index, osmosis.txfees.v1beta1.Feetoken.FeeToken.getDefaultInstance());
      }
      /**
       * <code>repeated .osmosis.txfees.v1beta1.FeeToken feetokens = 2 [(.gogoproto.nullable) = false];</code>
       */
      public java.util.List<osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder> 
           getFeetokensBuilderList() {
        return getFeetokensFieldBuilder().getBuilderList();
      }
      private com.google.protobuf.RepeatedFieldBuilderV3<
          osmosis.txfees.v1beta1.Feetoken.FeeToken, osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder, osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder> 
          getFeetokensFieldBuilder() {
        if (feetokensBuilder_ == null) {
          feetokensBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
              osmosis.txfees.v1beta1.Feetoken.FeeToken, osmosis.txfees.v1beta1.Feetoken.FeeToken.Builder, osmosis.txfees.v1beta1.Feetoken.FeeTokenOrBuilder>(
                  feetokens_,
                  ((bitField0_ & 0x00000001) != 0),
                  getParentForChildren(),
                  isClean());
          feetokens_ = null;
        }
        return feetokensBuilder_;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:osmosis.txfees.v1beta1.GenesisState)
    }

    // @@protoc_insertion_point(class_scope:osmosis.txfees.v1beta1.GenesisState)
    private static final osmosis.txfees.v1beta1.Genesis.GenesisState DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new osmosis.txfees.v1beta1.Genesis.GenesisState();
    }

    public static osmosis.txfees.v1beta1.Genesis.GenesisState getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<GenesisState>
        PARSER = new com.google.protobuf.AbstractParser<GenesisState>() {
      @java.lang.Override
      public GenesisState parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new GenesisState(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<GenesisState> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<GenesisState> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public osmosis.txfees.v1beta1.Genesis.GenesisState getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_osmosis_txfees_v1beta1_GenesisState_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_osmosis_txfees_v1beta1_GenesisState_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n$osmosis/txfees/v1beta1/genesis.proto\022\026" +
      "osmosis.txfees.v1beta1\032\024gogoproto/gogo.p" +
      "roto\032%osmosis/txfees/v1beta1/feetoken.pr" +
      "oto\"\\\n\014GenesisState\022\021\n\tbasedenom\030\001 \001(\t\0229" +
      "\n\tfeetokens\030\002 \003(\0132 .osmosis.txfees.v1bet" +
      "a1.FeeTokenB\004\310\336\037\000B3Z1github.com/osmosis-" +
      "labs/osmosis/v7/x/txfees/typesb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf2.GoGoProtos.getDescriptor(),
          osmosis.txfees.v1beta1.Feetoken.getDescriptor(),
        });
    internal_static_osmosis_txfees_v1beta1_GenesisState_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_osmosis_txfees_v1beta1_GenesisState_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_osmosis_txfees_v1beta1_GenesisState_descriptor,
        new java.lang.String[] { "Basedenom", "Feetokens", });
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(com.google.protobuf2.GoGoProtos.nullable);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
    com.google.protobuf2.GoGoProtos.getDescriptor();
    osmosis.txfees.v1beta1.Feetoken.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
