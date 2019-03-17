/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


interface CSSRuleList {
    [Symbol.iterator](): IterableIterator<CSSRule>;
}

interface CSSStyleDeclaration {
    [Symbol.iterator](): IterableIterator<string>;
}

interface ClientRectList {
    [Symbol.iterator](): IterableIterator<ClientRect>;
}

interface DOMRectList {
    [Symbol.iterator](): IterableIterator<DOMRect>;
}

interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string>;
}

interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string>;
    entries(): IterableIterator<[number, string]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<string>;
}

interface DataTransferItemList {
    [Symbol.iterator](): IterableIterator<DataTransferItem>;
}

interface FileList {
    [Symbol.iterator](): IterableIterator<File>;
}

interface FormData {
    [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    /**
     * Returns a list of keys in the list.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the list.
     */
    values(): IterableIterator<FormDataEntryValue>;
}

interface HTMLAllCollection {
    [Symbol.iterator](): IterableIterator<Element>;
}

interface HTMLCollectionBase {
    [Symbol.iterator](): IterableIterator<Element>;
}

interface HTMLCollectionOf<T extends Element> {
    [Symbol.iterator](): IterableIterator<T>;
}

interface Headers {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
     */
    values(): IterableIterator<string>;
}

interface MediaList {
    [Symbol.iterator](): IterableIterator<string>;
}

interface MimeTypeArray {
    [Symbol.iterator](): IterableIterator<Plugin>;
}

interface NamedNodeMap {
    [Symbol.iterator](): IterableIterator<Attr>;
}

interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[number, Node]>;
    /**
     * Returns an list of keys in the list.
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list.
     */
    values(): IterableIterator<Node>;
}

interface NodeListOf<TNode extends Node> {
    [Symbol.iterator](): IterableIterator<TNode>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[number, TNode]>;
    /**
     * Returns an list of keys in the list.
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list.
     */
    values(): IterableIterator<TNode>;
}

interface Plugin {
    [Symbol.iterator](): IterableIterator<MimeType>;
}

interface PluginArray {
    [Symbol.iterator](): IterableIterator<Plugin>;
}

interface RTCStatsReport extends ReadonlyMap<string, any> {
}

interface SVGLengthList {
    [Symbol.iterator](): IterableIterator<SVGLength>;
}

interface SVGNumberList {
    [Symbol.iterator](): IterableIterator<SVGNumber>;
}

interface SVGStringList {
    [Symbol.iterator](): IterableIterator<string>;
}

interface SourceBufferList {
    [Symbol.iterator](): IterableIterator<SourceBuffer>;
}

interface SpeechGrammarList {
    [Symbol.iterator](): IterableIterator<SpeechGrammar>;
}

interface SpeechRecognitionResult {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionAlternative>;
}

interface SpeechRecognitionResultList {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionResult>;
}

interface StyleSheetList {
    [Symbol.iterator](): IterableIterator<StyleSheet>;
}

interface TextTrackCueList {
    [Symbol.iterator](): IterableIterator<TextTrackCue>;
}

interface TextTrackList {
    [Symbol.iterator](): IterableIterator<TextTrack>;
}

interface TouchList {
    [Symbol.iterator](): IterableIterator<Touch>;
}

interface URLSearchParams {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    /**
     * Returns an array of key, value pairs for every entry in the search params.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a list of keys in the search params.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the search params.
     */
    values(): IterableIterator<string>;
}

interface VideoTrackList {
    [Symbol.iterator](): IterableIterator<VideoTrack>;
}





export interface StandardLonghandProperties<TLength = string | 0> {
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  animationDelay?: GlobalsString;
  animationDirection?: AnimationDirectionProperty;
  animationDuration?: GlobalsString;
  animationFillMode?: AnimationFillModeProperty;
  animationIterationCount?: AnimationIterationCountProperty;
  animationName?: AnimationNameProperty;
  animationPlayState?: AnimationPlayStateProperty;
  animationTimingFunction?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  backdropFilter?: BackdropFilterProperty;
  backfaceVisibility?: BackfaceVisibilityProperty;
  backgroundAttachment?: BackgroundAttachmentProperty;
  backgroundBlendMode?: BackgroundBlendModeProperty;
  backgroundClip?: BackgroundClipProperty;
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundOrigin?: BackgroundOriginProperty;
  backgroundPosition?: BackgroundPositionProperty<TLength>;
  backgroundPositionX?: BackgroundPositionXProperty<TLength>;
  backgroundPositionY?: BackgroundPositionYProperty<TLength>;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundSize?: BackgroundSizeProperty<TLength>;
  blockOverflow?: BlockOverflowProperty;
  blockSize?: BlockSizeProperty<TLength>;
  borderBlockEndColor?: BorderBlockEndColorProperty;
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>;
  borderBlockStartColor?: BorderBlockStartColorProperty;
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>;
  borderBottomColor?: BorderBottomColorProperty;
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  borderBottomStyle?: BorderBottomStyleProperty;
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  borderCollapse?: BorderCollapseProperty;
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  borderImageRepeat?: BorderImageRepeatProperty;
  borderImageSlice?: BorderImageSliceProperty;
  borderImageSource?: BorderImageSourceProperty;
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  borderInlineEndColor?: BorderInlineEndColorProperty;
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>;
  borderInlineStartColor?: BorderInlineStartColorProperty;
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>;
  borderLeftColor?: BorderLeftColorProperty;
  borderLeftStyle?: BorderLeftStyleProperty;
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  borderRightColor?: BorderRightColorProperty;
  borderRightStyle?: BorderRightStyleProperty;
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  borderSpacing?: BorderSpacingProperty<TLength>;
  borderTopColor?: BorderTopColorProperty;
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  borderTopStyle?: BorderTopStyleProperty;
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxShadow?: BoxShadowProperty;
  boxSizing?: BoxSizingProperty;
  breakAfter?: BreakAfterProperty;
  breakBefore?: BreakBeforeProperty;
  breakInside?: BreakInsideProperty;
  captionSide?: CaptionSideProperty;
  caretColor?: CaretColorProperty;
  clear?: ClearProperty;
  clipPath?: ClipPathProperty;
  color?: ColorProperty;
  colorAdjust?: ColorAdjustProperty;
  columnCount?: ColumnCountProperty;
  columnFill?: ColumnFillProperty;
  columnGap?: ColumnGapProperty<TLength>;
  columnRuleColor?: ColumnRuleColorProperty;
  columnRuleStyle?: ColumnRuleStyleProperty;
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  columnSpan?: ColumnSpanProperty;
  columnWidth?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  content?: ContentProperty;
  counterIncrement?: CounterIncrementProperty;
  counterReset?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  emptyCells?: EmptyCellsProperty;
  filter?: FilterProperty;
  flexBasis?: FlexBasisProperty<TLength>;
  flexDirection?: FlexDirectionProperty;
  flexGrow?: GlobalsNumber;
  flexShrink?: GlobalsNumber;
  flexWrap?: FlexWrapProperty;
  float?: FloatProperty;
  fontFamily?: FontFamilyProperty;
  fontFeatureSettings?: FontFeatureSettingsProperty;
  fontKerning?: FontKerningProperty;
  fontLanguageOverride?: FontLanguageOverrideProperty;
  fontOpticalSizing?: FontOpticalSizingProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontSynthesis?: FontSynthesisProperty;
  fontVariant?: FontVariantProperty;
  fontVariantCaps?: FontVariantCapsProperty;
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  fontVariantLigatures?: FontVariantLigaturesProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  fontVariantPosition?: FontVariantPositionProperty;
  fontVariationSettings?: FontVariationSettingsProperty;
  fontWeight?: FontWeightProperty;
  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  gridAutoFlow?: GridAutoFlowProperty;
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  gridColumnEnd?: GridColumnEndProperty;
  gridColumnStart?: GridColumnStartProperty;
  gridRowEnd?: GridRowEndProperty;
  gridRowStart?: GridRowStartProperty;
  gridTemplateAreas?: GridTemplateAreasProperty;
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  hangingPunctuation?: HangingPunctuationProperty;
  height?: HeightProperty<TLength>;
  hyphens?: HyphensProperty;
  imageOrientation?: ImageOrientationProperty;
  imageRendering?: ImageRenderingProperty;
  imageResolution?: ImageResolutionProperty;
  initialLetter?: InitialLetterProperty;
  inlineSize?: InlineSizeProperty<TLength>;
  insetBlockEnd?: InsetBlockEndProperty<TLength>;
  insetBlockStart?: InsetBlockStartProperty<TLength>;
  insetInlineEnd?: InsetInlineEndProperty<TLength>;
  insetInlineStart?: InsetInlineStartProperty<TLength>;
  isolation?: IsolationProperty;
  justifyContent?: JustifyContentProperty;
  justifyItems?: JustifyItemsProperty;
  justifySelf?: JustifySelfProperty;
  left?: LeftProperty<TLength>;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lineBreak?: LineBreakProperty;
  lineHeight?: LineHeightProperty<TLength>;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  marginBlockEnd?: MarginBlockEndProperty<TLength>;
  marginBlockStart?: MarginBlockStartProperty<TLength>;
  marginBottom?: MarginBottomProperty<TLength>;
  marginInlineEnd?: MarginInlineEndProperty<TLength>;
  marginInlineStart?: MarginInlineStartProperty<TLength>;
  marginLeft?: MarginLeftProperty<TLength>;
  marginRight?: MarginRightProperty<TLength>;
  marginTop?: MarginTopProperty<TLength>;
  maskBorderMode?: MaskBorderModeProperty;
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  maskBorderRepeat?: MaskBorderRepeatProperty;
  maskBorderSlice?: MaskBorderSliceProperty;
  maskBorderSource?: MaskBorderSourceProperty;
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  maskClip?: MaskClipProperty;
  maskComposite?: MaskCompositeProperty;
  maskImage?: MaskImageProperty;
  maskMode?: MaskModeProperty;
  maskOrigin?: MaskOriginProperty;
  maskPosition?: MaskPositionProperty<TLength>;
  maskRepeat?: MaskRepeatProperty;
  maskSize?: MaskSizeProperty<TLength>;
  maskType?: MaskTypeProperty;
  maxBlockSize?: MaxBlockSizeProperty<TLength>;
  maxHeight?: MaxHeightProperty<TLength>;
  maxInlineSize?: MaxInlineSizeProperty<TLength>;
  maxLines?: MaxLinesProperty;
  maxWidth?: MaxWidthProperty<TLength>;
  minBlockSize?: MinBlockSizeProperty<TLength>;
  minHeight?: MinHeightProperty<TLength>;
  minInlineSize?: MinInlineSizeProperty<TLength>;
  minWidth?: MinWidthProperty<TLength>;
  mixBlendMode?: MixBlendModeProperty;
  motionOffset?: GlobalsString;
  motionPath?: MotionPathProperty;
  motionRotation?: GlobalsString;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<TLength>;
  offsetPosition?: OffsetPositionProperty<TLength>;
  opacity?: GlobalsNumber;
  order?: GlobalsNumber;
  orphans?: GlobalsNumber;
  outlineColor?: OutlineColorProperty;
  outlineOffset?: OutlineOffsetProperty<TLength>;
  outlineStyle?: OutlineStyleProperty;
  outlineWidth?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  overflowAnchor?: OverflowAnchorProperty;
  overflowBlock?: OverflowBlockProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowInline?: OverflowInlineProperty;
  overflowWrap?: OverflowWrapProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  overscrollBehavior?: OverscrollBehaviorProperty;
  overscrollBehaviorX?: OverscrollBehaviorXProperty;
  overscrollBehaviorY?: OverscrollBehaviorYProperty;
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>;
  paddingBlockStart?: PaddingBlockStartProperty<TLength>;
  paddingBottom?: PaddingBottomProperty<TLength>;
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>;
  paddingInlineStart?: PaddingInlineStartProperty<TLength>;
  paddingLeft?: PaddingLeftProperty<TLength>;
  paddingRight?: PaddingRightProperty<TLength>;
  paddingTop?: PaddingTopProperty<TLength>;
  pageBreakAfter?: PageBreakAfterProperty;
  pageBreakBefore?: PageBreakBeforeProperty;
  pageBreakInside?: PageBreakInsideProperty;
  paintOrder?: PaintOrderProperty;
  perspective?: PerspectiveProperty<TLength>;
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  placeContent?: PlaceContentProperty;
  pointerEvents?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rotate?: RotateProperty;
  rowGap?: RowGapProperty<TLength>;
  rubyAlign?: RubyAlignProperty;
  rubyMerge?: RubyMergeProperty;
  rubyPosition?: RubyPositionProperty;
  scale?: ScaleProperty;
  scrollBehavior?: ScrollBehaviorProperty;
  scrollMargin?: ScrollMarginProperty<TLength>;
  scrollMarginBlock?: ScrollMarginBlockProperty<TLength>;
  scrollMarginBlockEnd?: ScrollMarginBlockEndProperty<TLength>;
  scrollMarginBlockStart?: ScrollMarginBlockStartProperty<TLength>;
  scrollMarginBottom?: ScrollMarginBottomProperty<TLength>;
  scrollMarginInlineEnd?: ScrollMarginInlineEndProperty<TLength>;
  scrollMarginInlineStart?: ScrollMarginInlineStartProperty<TLength>;
  scrollMarginLeft?: ScrollMarginLeftProperty<TLength>;
  scrollMarginRight?: ScrollMarginRightProperty<TLength>;
  scrollMarginTop?: ScrollMarginTopProperty<TLength>;
  scrollPadding?: ScrollPaddingProperty<TLength>;
  scrollPaddingBlock?: ScrollPaddingBlockProperty<TLength>;
  scrollPaddingBlockEnd?: ScrollPaddingBlockEndProperty<TLength>;
  scrollPaddingBlockStart?: ScrollPaddingBlockStartProperty<TLength>;
  scrollPaddingBottom?: ScrollPaddingBottomProperty<TLength>;
  scrollPaddingInline?: ScrollPaddingInlineProperty<TLength>;
  scrollPaddingInlineEnd?: ScrollPaddingInlineEndProperty<TLength>;
  scrollPaddingInlineStart?: ScrollPaddingInlineStartProperty<TLength>;
  scrollPaddingLeft?: ScrollPaddingLeftProperty<TLength>;
  scrollPaddingRight?: ScrollPaddingRightProperty<TLength>;
  scrollPaddingTop?: ScrollPaddingTopProperty<TLength>;
  scrollSnapAlign?: ScrollSnapAlignProperty;
  scrollSnapStop?: ScrollSnapStopProperty;
  scrollSnapType?: ScrollSnapTypeProperty;
  scrollbarColor?: ScrollbarColorProperty;
  scrollbarWidth?: ScrollbarWidthProperty<TLength>;
  shapeImageThreshold?: GlobalsNumber;
  shapeMargin?: ShapeMarginProperty<TLength>;
  shapeOutside?: ShapeOutsideProperty;
  tabSize?: TabSizeProperty<TLength>;
  tableLayout?: TableLayoutProperty;
  textAlign?: TextAlignProperty;
  textAlignLast?: TextAlignLastProperty;
  textCombineUpright?: TextCombineUprightProperty;
  textDecorationColor?: TextDecorationColorProperty;
  textDecorationLine?: TextDecorationLineProperty;
  textDecorationSkip?: TextDecorationSkipProperty;
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  textDecorationStyle?: TextDecorationStyleProperty;
  textEmphasisColor?: TextEmphasisColorProperty;
  textEmphasisPosition?: GlobalsString;
  textEmphasisStyle?: TextEmphasisStyleProperty;
  textIndent?: TextIndentProperty<TLength>;
  textJustify?: TextJustifyProperty;
  textOrientation?: TextOrientationProperty;
  textOverflow?: TextOverflowProperty;
  textRendering?: TextRenderingProperty;
  textShadow?: TextShadowProperty;
  textSizeAdjust?: TextSizeAdjustProperty;
  textTransform?: TextTransformProperty;
  textUnderlinePosition?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  touchAction?: TouchActionProperty;
  transform?: TransformProperty;
  transformBox?: TransformBoxProperty;
  transformOrigin?: TransformOriginProperty<TLength>;
  transformStyle?: TransformStyleProperty;
  transitionDelay?: GlobalsString;
  transitionDuration?: GlobalsString;
  transitionProperty?: TransitionPropertyProperty;
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  translate?: TranslateProperty<TLength>;
  unicodeBidi?: UnicodeBidiProperty;
  userSelect?: UserSelectProperty;
  verticalAlign?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  widows?: GlobalsNumber;
  width?: WidthProperty<TLength>;
  willChange?: WillChangeProperty;
  wordBreak?: WordBreakProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  wordWrap?: WordWrapProperty;
  writingMode?: WritingModeProperty;
  zIndex?: ZIndexProperty;
  zoom?: ZoomProperty;
}
export interface StandardShorthandProperties<TLength = string | 0> {
  all?: Globals;
  animation?: AnimationProperty;
  background?: BackgroundProperty<TLength>;
  border?: BorderProperty<TLength>;
  borderBlockEnd?: BorderBlockEndProperty<TLength>;
  borderBlockStart?: BorderBlockStartProperty<TLength>;
  borderBottom?: BorderBottomProperty<TLength>;
  borderColor?: BorderColorProperty;
  borderImage?: BorderImageProperty;
  borderInlineEnd?: BorderInlineEndProperty<TLength>;
  borderInlineStart?: BorderInlineStartProperty<TLength>;
  borderLeft?: BorderLeftProperty<TLength>;
  borderRadius?: BorderRadiusProperty<TLength>;
  borderRight?: BorderRightProperty<TLength>;
  borderStyle?: BorderStyleProperty;
  borderTop?: BorderTopProperty<TLength>;
  borderWidth?: BorderWidthProperty<TLength>;
  columnRule?: ColumnRuleProperty<TLength>;
  columns?: ColumnsProperty<TLength>;
  flex?: FlexProperty<TLength>;
  flexFlow?: FlexFlowProperty;
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  grid?: GridProperty;
  gridArea?: GridAreaProperty;
  gridColumn?: GridColumnProperty;
  gridRow?: GridRowProperty;
  gridTemplate?: GridTemplateProperty;
  lineClamp?: LineClampProperty;
  listStyle?: ListStyleProperty;
  margin?: MarginProperty<TLength>;
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  motion?: GlobalsString;
  outline?: OutlineProperty<TLength>;
  padding?: PaddingProperty<TLength>;
  placeItems?: PlaceItemsProperty;
  textDecoration?: TextDecorationProperty;
  textEmphasis?: TextEmphasisProperty;
  transition?: TransitionProperty;
}
export interface StandardProperties<TLength = string | 0> extends StandardLonghandProperties<TLength>, StandardShorthandProperties<TLength> {
}
export interface VendorLonghandProperties<TLength = string | 0> {
  MozAnimationDelay?: GlobalsString;
  MozAnimationDirection?: AnimationDirectionProperty;
  MozAnimationDuration?: GlobalsString;
  MozAnimationFillMode?: AnimationFillModeProperty;
  MozAnimationIterationCount?: AnimationIterationCountProperty;
  MozAnimationName?: AnimationNameProperty;
  MozAnimationPlayState?: AnimationPlayStateProperty;
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty;
  MozAppearance?: MozAppearanceProperty;
  MozBackfaceVisibility?: BackfaceVisibilityProperty;
  MozBorderBottomColors?: MozBorderBottomColorsProperty;
  MozBorderEndColor?: BorderInlineEndColorProperty;
  MozBorderEndStyle?: BorderInlineEndStyleProperty;
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength>;
  MozBorderLeftColors?: MozBorderLeftColorsProperty;
  MozBorderRightColors?: MozBorderRightColorsProperty;
  MozBorderStartColor?: BorderInlineStartColorProperty;
  MozBorderStartStyle?: BorderInlineStartStyleProperty;
  MozBorderTopColors?: MozBorderTopColorsProperty;
  MozBoxSizing?: BoxSizingProperty;
  MozColumnCount?: ColumnCountProperty;
  MozColumnFill?: ColumnFillProperty;
  MozColumnGap?: ColumnGapProperty<TLength>;
  MozColumnRuleColor?: ColumnRuleColorProperty;
  MozColumnRuleStyle?: ColumnRuleStyleProperty;
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  MozColumnWidth?: ColumnWidthProperty<TLength>;
  MozContextProperties?: MozContextPropertiesProperty;
  MozFloatEdge?: MozFloatEdgeProperty;
  MozFontFeatureSettings?: FontFeatureSettingsProperty;
  MozFontLanguageOverride?: FontLanguageOverrideProperty;
  MozForceBrokenImageIcon?: GlobalsNumber;
  MozHyphens?: HyphensProperty;
  MozImageRegion?: MozImageRegionProperty;
  MozMarginEnd?: MarginInlineEndProperty<TLength>;
  MozMarginStart?: MarginInlineStartProperty<TLength>;
  MozOrient?: MozOrientProperty;
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength>;
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength>;
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength>;
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength>;
  MozPaddingEnd?: PaddingInlineEndProperty<TLength>;
  MozPaddingStart?: PaddingInlineStartProperty<TLength>;
  MozPerspective?: PerspectiveProperty<TLength>;
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  MozStackSizing?: MozStackSizingProperty;
  MozTabSize?: TabSizeProperty<TLength>;
  MozTextSizeAdjust?: TextSizeAdjustProperty;
  MozTransformOrigin?: TransformOriginProperty<TLength>;
  MozTransformStyle?: TransformStyleProperty;
  MozTransitionDelay?: GlobalsString;
  MozTransitionDuration?: GlobalsString;
  MozTransitionProperty?: TransitionPropertyProperty;
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty;
  MozUserFocus?: MozUserFocusProperty;
  MozUserModify?: MozUserModifyProperty;
  MozUserSelect?: UserSelectProperty;
  MozWindowDragging?: MozWindowDraggingProperty;
  MozWindowShadow?: MozWindowShadowProperty;
  msAccelerator?: MsAcceleratorProperty;
  msAlignSelf?: AlignSelfProperty;
  msBlockProgression?: MsBlockProgressionProperty;
  msContentZoomChaining?: MsContentZoomChainingProperty;
  msContentZoomLimitMax?: GlobalsString;
  msContentZoomLimitMin?: GlobalsString;
  msContentZoomSnapPoints?: GlobalsString;
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty;
  msContentZooming?: MsContentZoomingProperty;
  msFilter?: GlobalsString;
  msFlexDirection?: FlexDirectionProperty;
  msFlexPositive?: GlobalsNumber;
  msFlowFrom?: MsFlowFromProperty;
  msFlowInto?: MsFlowIntoProperty;
  msGridColumns?: GridAutoColumnsProperty<TLength>;
  msGridRows?: GridAutoRowsProperty<TLength>;
  msHighContrastAdjust?: MsHighContrastAdjustProperty;
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty;
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty;
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength>;
  msHyphens?: HyphensProperty;
  msImeAlign?: MsImeAlignProperty;
  msLineBreak?: LineBreakProperty;
  msOrder?: GlobalsNumber;
  msOverflowStyle?: MsOverflowStyleProperty;
  msOverflowX?: OverflowXProperty;
  msOverflowY?: OverflowYProperty;
  msScrollChaining?: MsScrollChainingProperty;
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength>;
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength>;
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength>;
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength>;
  msScrollRails?: MsScrollRailsProperty;
  msScrollSnapPointsX?: GlobalsString;
  msScrollSnapPointsY?: GlobalsString;
  msScrollSnapType?: MsScrollSnapTypeProperty;
  msScrollTranslation?: MsScrollTranslationProperty;
  msTextAutospace?: MsTextAutospaceProperty;
  msTextCombineHorizontal?: TextCombineUprightProperty;
  msTextOverflow?: TextOverflowProperty;
  msTextSizeAdjust?: TextSizeAdjustProperty;
  msTouchAction?: TouchActionProperty;
  msTouchSelect?: MsTouchSelectProperty;
  msTransform?: TransformProperty;
  msTransformOrigin?: TransformOriginProperty<TLength>;
  msUserSelect?: MsUserSelectProperty;
  msWordBreak?: WordBreakProperty;
  msWrapFlow?: MsWrapFlowProperty;
  msWrapMargin?: MsWrapMarginProperty<TLength>;
  msWrapThrough?: MsWrapThroughProperty;
  msWritingMode?: WritingModeProperty;
  OObjectFit?: ObjectFitProperty;
  OObjectPosition?: ObjectPositionProperty<TLength>;
  OTabSize?: TabSizeProperty<TLength>;
  OTextOverflow?: TextOverflowProperty;
  OTransformOrigin?: TransformOriginProperty<TLength>;
  WebkitAlignContent?: AlignContentProperty;
  WebkitAlignItems?: AlignItemsProperty;
  WebkitAlignSelf?: AlignSelfProperty;
  WebkitAnimationDelay?: GlobalsString;
  WebkitAnimationDirection?: AnimationDirectionProperty;
  WebkitAnimationDuration?: GlobalsString;
  WebkitAnimationFillMode?: AnimationFillModeProperty;
  WebkitAnimationIterationCount?: AnimationIterationCountProperty;
  WebkitAnimationName?: AnimationNameProperty;
  WebkitAnimationPlayState?: AnimationPlayStateProperty;
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty;
  WebkitAppearance?: WebkitAppearanceProperty;
  WebkitBackdropFilter?: BackdropFilterProperty;
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty;
  WebkitBackgroundClip?: BackgroundClipProperty;
  WebkitBackgroundOrigin?: BackgroundOriginProperty;
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength>;
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength>;
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  WebkitBorderImageSlice?: BorderImageSliceProperty;
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty;
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength>;
  WebkitBoxShadow?: BoxShadowProperty;
  WebkitBoxSizing?: BoxSizingProperty;
  WebkitClipPath?: ClipPathProperty;
  WebkitColorAdjust?: ColorAdjustProperty;
  WebkitColumnCount?: ColumnCountProperty;
  WebkitColumnGap?: ColumnGapProperty<TLength>;
  WebkitColumnRuleColor?: ColumnRuleColorProperty;
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty;
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  WebkitColumnSpan?: ColumnSpanProperty;
  WebkitColumnWidth?: ColumnWidthProperty<TLength>;
  WebkitFilter?: FilterProperty;
  WebkitFlexBasis?: FlexBasisProperty<TLength>;
  WebkitFlexDirection?: FlexDirectionProperty;
  WebkitFlexGrow?: GlobalsNumber;
  WebkitFlexShrink?: GlobalsNumber;
  WebkitFlexWrap?: FlexWrapProperty;
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty;
  WebkitFontKerning?: FontKerningProperty;
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty;
  WebkitHyphens?: HyphensProperty;
  WebkitJustifyContent?: JustifyContentProperty;
  WebkitLineBreak?: LineBreakProperty;
  WebkitMarginEnd?: MarginInlineEndProperty<TLength>;
  WebkitMarginStart?: MarginInlineStartProperty<TLength>;
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty;
  WebkitMaskClip?: WebkitMaskClipProperty;
  WebkitMaskComposite?: WebkitMaskCompositeProperty;
  WebkitMaskImage?: WebkitMaskImageProperty;
  WebkitMaskOrigin?: WebkitMaskOriginProperty;
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  WebkitMaskRepeat?: WebkitMaskRepeatProperty;
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  WebkitMaskSize?: WebkitMaskSizeProperty<TLength>;
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength>;
  WebkitOrder?: GlobalsNumber;
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength>;
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength>;
  WebkitPerspective?: PerspectiveProperty<TLength>;
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  WebkitScrollSnapType?: ScrollSnapTypeProperty;
  WebkitShapeMargin?: ShapeMarginProperty<TLength>;
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  WebkitTextCombine?: TextCombineUprightProperty;
  WebkitTextDecorationColor?: TextDecorationColorProperty;
  WebkitTextDecorationLine?: TextDecorationLineProperty;
  WebkitTextDecorationSkip?: TextDecorationSkipProperty;
  WebkitTextDecorationStyle?: TextDecorationStyleProperty;
  WebkitTextEmphasisColor?: TextEmphasisColorProperty;
  WebkitTextEmphasisPosition?: GlobalsString;
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty;
  WebkitTextFillColor?: WebkitTextFillColorProperty;
  WebkitTextOrientation?: TextOrientationProperty;
  WebkitTextSizeAdjust?: TextSizeAdjustProperty;
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  WebkitTouchCallout?: WebkitTouchCalloutProperty;
  WebkitTransform?: TransformProperty;
  WebkitTransformOrigin?: TransformOriginProperty<TLength>;
  WebkitTransformStyle?: TransformStyleProperty;
  WebkitTransitionDelay?: GlobalsString;
  WebkitTransitionDuration?: GlobalsString;
  WebkitTransitionProperty?: TransitionPropertyProperty;
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty;
  WebkitUserModify?: WebkitUserModifyProperty;
  WebkitUserSelect?: UserSelectProperty;
  WebkitWritingMode?: WritingModeProperty;
}
export interface VendorShorthandProperties<TLength = string | 0> {
  MozAnimation?: AnimationProperty;
  MozBorderImage?: BorderImageProperty;
  MozColumnRule?: ColumnRuleProperty<TLength>;
  MozColumns?: ColumnsProperty<TLength>;
  MozTransition?: TransitionProperty;
  msContentZoomLimit?: GlobalsString;
  msContentZoomSnap?: MsContentZoomSnapProperty;
  msFlex?: FlexProperty<TLength>;
  msScrollLimit?: GlobalsString;
  msScrollSnapX?: GlobalsString;
  msScrollSnapY?: GlobalsString;
  OBorderImage?: BorderImageProperty;
  WebkitAnimation?: AnimationProperty;
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength>;
  WebkitBorderImage?: BorderImageProperty;
  WebkitBorderRadius?: BorderRadiusProperty<TLength>;
  WebkitColumnRule?: ColumnRuleProperty<TLength>;
  WebkitColumns?: ColumnsProperty<TLength>;
  WebkitFlex?: FlexProperty<TLength>;
  WebkitFlexFlow?: FlexFlowProperty;
  WebkitLineClamp?: WebkitLineClampProperty;
  WebkitMask?: WebkitMaskProperty<TLength>;
  WebkitTextEmphasis?: TextEmphasisProperty;
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength>;
  WebkitTransition?: TransitionProperty;
}
export interface VendorProperties<TLength = string | 0> extends VendorLonghandProperties<TLength>, VendorShorthandProperties<TLength> {
}
export interface ObsoleteProperties<TLength = string | 0> {
  boxAlign?: BoxAlignProperty;
  boxDirection?: BoxDirectionProperty;
  boxFlex?: GlobalsNumber;
  boxFlexGroup?: GlobalsNumber;
  boxLines?: BoxLinesProperty;
  boxOrdinalGroup?: GlobalsNumber;
  boxOrient?: BoxOrientProperty;
  boxPack?: BoxPackProperty;
  clip?: ClipProperty;
  fontVariantAlternates?: FontVariantAlternatesProperty;
  gridColumnGap?: GridColumnGapProperty<TLength>;
  gridGap?: GridGapProperty<TLength>;
  gridRowGap?: GridRowGapProperty<TLength>;
  imeMode?: ImeModeProperty;
  offsetBlockEnd?: InsetBlockEndProperty<TLength>;
  offsetBlockStart?: InsetBlockStartProperty<TLength>;
  offsetInlineEnd?: InsetInlineEndProperty<TLength>;
  offsetInlineStart?: InsetInlineStartProperty<TLength>;
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>;
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>;
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  textCombineHorizontal?: TextCombineUprightProperty;
  KhtmlBoxAlign?: BoxAlignProperty;
  KhtmlBoxDirection?: BoxDirectionProperty;
  KhtmlBoxFlex?: GlobalsNumber;
  KhtmlBoxFlexGroup?: GlobalsNumber;
  KhtmlBoxLines?: BoxLinesProperty;
  KhtmlBoxOrdinalGroup?: GlobalsNumber;
  KhtmlBoxOrient?: BoxOrientProperty;
  KhtmlBoxPack?: BoxPackProperty;
  MozBackgroundClip?: BackgroundClipProperty;
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty;
  MozBackgroundOrigin?: BackgroundOriginProperty;
  MozBackgroundSize?: BackgroundSizeProperty<TLength>;
  MozBinding?: MozBindingProperty;
  MozBorderRadius?: BorderRadiusProperty<TLength>;
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength>;
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength>;
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength>;
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength>;
  MozBoxAlign?: BoxAlignProperty;
  MozBoxDirection?: BoxDirectionProperty;
  MozBoxFlex?: GlobalsNumber;
  MozBoxOrdinalGroup?: GlobalsNumber;
  MozBoxOrient?: BoxOrientProperty;
  MozBoxPack?: BoxPackProperty;
  MozBoxShadow?: BoxShadowProperty;
  MozOpacity?: GlobalsNumber;
  MozOutline?: OutlineProperty<TLength>;
  MozOutlineColor?: OutlineColorProperty;
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength>;
  MozOutlineStyle?: OutlineStyleProperty;
  MozOutlineWidth?: OutlineWidthProperty<TLength>;
  MozResize?: ResizeProperty;
  MozTextAlignLast?: TextAlignLastProperty;
  MozTextBlink?: MozTextBlinkProperty;
  MozTextDecorationColor?: TextDecorationColorProperty;
  MozTextDecorationLine?: TextDecorationLineProperty;
  MozTextDecorationStyle?: TextDecorationStyleProperty;
  MozUserInput?: MozUserInputProperty;
  msImeMode?: ImeModeProperty;
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty;
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty;
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty;
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty;
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty;
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty;
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty;
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty;
  OAnimation?: AnimationProperty;
  OAnimationDelay?: GlobalsString;
  OAnimationDirection?: AnimationDirectionProperty;
  OAnimationDuration?: GlobalsString;
  OAnimationFillMode?: AnimationFillModeProperty;
  OAnimationIterationCount?: AnimationIterationCountProperty;
  OAnimationName?: AnimationNameProperty;
  OAnimationPlayState?: AnimationPlayStateProperty;
  OAnimationTimingFunction?: AnimationTimingFunctionProperty;
  OBackgroundSize?: BackgroundSizeProperty<TLength>;
  OTransform?: TransformProperty;
  OTransition?: TransitionProperty;
  OTransitionDelay?: GlobalsString;
  OTransitionDuration?: GlobalsString;
  OTransitionProperty?: TransitionPropertyProperty;
  OTransitionTimingFunction?: TransitionTimingFunctionProperty;
  WebkitBoxAlign?: BoxAlignProperty;
  WebkitBoxDirection?: BoxDirectionProperty;
  WebkitBoxFlex?: GlobalsNumber;
  WebkitBoxFlexGroup?: GlobalsNumber;
  WebkitBoxLines?: BoxLinesProperty;
  WebkitBoxOrdinalGroup?: GlobalsNumber;
  WebkitBoxOrient?: BoxOrientProperty;
  WebkitBoxPack?: BoxPackProperty;
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty;
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty;
}
export interface SvgProperties<TLength = string | 0> {
  alignmentBaseline?: AlignmentBaselineProperty;
  baselineShift?: BaselineShiftProperty<TLength>;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  clipRule?: ClipRuleProperty;
  color?: ColorProperty;
  colorInterpolation?: ColorInterpolationProperty;
  colorRendering?: ColorRenderingProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  dominantBaseline?: DominantBaselineProperty;
  fill?: FillProperty;
  fillOpacity?: GlobalsNumber;
  fillRule?: FillRuleProperty;
  filter?: FilterProperty;
  floodColor?: FloodColorProperty;
  floodOpacity?: GlobalsNumber;
  font?: FontProperty;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontVariant?: FontVariantProperty;
  fontWeight?: FontWeightProperty;
  glyphOrientationVertical?: GlyphOrientationVerticalProperty;
  imageRendering?: ImageRenderingProperty;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lightingColor?: LightingColorProperty;
  lineHeight?: LineHeightProperty<TLength>;
  marker?: MarkerProperty;
  markerEnd?: MarkerEndProperty;
  markerMid?: MarkerMidProperty;
  markerStart?: MarkerStartProperty;
  mask?: MaskProperty<TLength>;
  opacity?: GlobalsNumber;
  overflow?: OverflowProperty;
  paintOrder?: PaintOrderProperty;
  pointerEvents?: PointerEventsProperty;
  shapeRendering?: ShapeRenderingProperty;
  stopColor?: StopColorProperty;
  stopOpacity?: GlobalsNumber;
  stroke?: StrokeProperty;
  strokeDasharray?: StrokeDasharrayProperty<TLength>;
  strokeDashoffset?: StrokeDashoffsetProperty<TLength>;
  strokeLinecap?: StrokeLinecapProperty;
  strokeLinejoin?: StrokeLinejoinProperty;
  strokeMiterlimit?: GlobalsNumber;
  strokeOpacity?: GlobalsNumber;
  strokeWidth?: StrokeWidthProperty<TLength>;
  textAnchor?: TextAnchorProperty;
  textDecoration?: TextDecorationProperty;
  textRendering?: TextRenderingProperty;
  unicodeBidi?: UnicodeBidiProperty;
  vectorEffect?: VectorEffectProperty;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  writingMode?: WritingModeProperty;
}
export interface Properties<TLength = string | 0> extends StandardProperties<TLength>, VendorProperties<TLength>, ObsoleteProperties<TLength>, SvgProperties<TLength> {
}
export interface StandardLonghandPropertiesHyphen<TLength = string | 0> {
  'align-content'?: AlignContentProperty;
  'align-items'?: AlignItemsProperty;
  'align-self'?: AlignSelfProperty;
  'animation-delay'?: GlobalsString;
  'animation-direction'?: AnimationDirectionProperty;
  'animation-duration'?: GlobalsString;
  'animation-fill-mode'?: AnimationFillModeProperty;
  'animation-iteration-count'?: AnimationIterationCountProperty;
  'animation-name'?: AnimationNameProperty;
  'animation-play-state'?: AnimationPlayStateProperty;
  'animation-timing-function'?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  'backdrop-filter'?: BackdropFilterProperty;
  'backface-visibility'?: BackfaceVisibilityProperty;
  'background-attachment'?: BackgroundAttachmentProperty;
  'background-blend-mode'?: BackgroundBlendModeProperty;
  'background-clip'?: BackgroundClipProperty;
  'background-color'?: BackgroundColorProperty;
  'background-image'?: BackgroundImageProperty;
  'background-origin'?: BackgroundOriginProperty;
  'background-position'?: BackgroundPositionProperty<TLength>;
  'background-position-x'?: BackgroundPositionXProperty<TLength>;
  'background-position-y'?: BackgroundPositionYProperty<TLength>;
  'background-repeat'?: BackgroundRepeatProperty;
  'background-size'?: BackgroundSizeProperty<TLength>;
  'block-overflow'?: BlockOverflowProperty;
  'block-size'?: BlockSizeProperty<TLength>;
  'border-block-end-color'?: BorderBlockEndColorProperty;
  'border-block-end-style'?: BorderBlockEndStyleProperty;
  'border-block-end-width'?: BorderBlockEndWidthProperty<TLength>;
  'border-block-start-color'?: BorderBlockStartColorProperty;
  'border-block-start-style'?: BorderBlockStartStyleProperty;
  'border-block-start-width'?: BorderBlockStartWidthProperty<TLength>;
  'border-bottom-color'?: BorderBottomColorProperty;
  'border-bottom-left-radius'?: BorderBottomLeftRadiusProperty<TLength>;
  'border-bottom-right-radius'?: BorderBottomRightRadiusProperty<TLength>;
  'border-bottom-style'?: BorderBottomStyleProperty;
  'border-bottom-width'?: BorderBottomWidthProperty<TLength>;
  'border-collapse'?: BorderCollapseProperty;
  'border-image-outset'?: BorderImageOutsetProperty<TLength>;
  'border-image-repeat'?: BorderImageRepeatProperty;
  'border-image-slice'?: BorderImageSliceProperty;
  'border-image-source'?: BorderImageSourceProperty;
  'border-image-width'?: BorderImageWidthProperty<TLength>;
  'border-inline-end-color'?: BorderInlineEndColorProperty;
  'border-inline-end-style'?: BorderInlineEndStyleProperty;
  'border-inline-end-width'?: BorderInlineEndWidthProperty<TLength>;
  'border-inline-start-color'?: BorderInlineStartColorProperty;
  'border-inline-start-style'?: BorderInlineStartStyleProperty;
  'border-inline-start-width'?: BorderInlineStartWidthProperty<TLength>;
  'border-left-color'?: BorderLeftColorProperty;
  'border-left-style'?: BorderLeftStyleProperty;
  'border-left-width'?: BorderLeftWidthProperty<TLength>;
  'border-right-color'?: BorderRightColorProperty;
  'border-right-style'?: BorderRightStyleProperty;
  'border-right-width'?: BorderRightWidthProperty<TLength>;
  'border-spacing'?: BorderSpacingProperty<TLength>;
  'border-top-color'?: BorderTopColorProperty;
  'border-top-left-radius'?: BorderTopLeftRadiusProperty<TLength>;
  'border-top-right-radius'?: BorderTopRightRadiusProperty<TLength>;
  'border-top-style'?: BorderTopStyleProperty;
  'border-top-width'?: BorderTopWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  'box-decoration-break'?: BoxDecorationBreakProperty;
  'box-shadow'?: BoxShadowProperty;
  'box-sizing'?: BoxSizingProperty;
  'break-after'?: BreakAfterProperty;
  'break-before'?: BreakBeforeProperty;
  'break-inside'?: BreakInsideProperty;
  'caption-side'?: CaptionSideProperty;
  'caret-color'?: CaretColorProperty;
  clear?: ClearProperty;
  'clip-path'?: ClipPathProperty;
  color?: ColorProperty;
  'color-adjust'?: ColorAdjustProperty;
  'column-count'?: ColumnCountProperty;
  'column-fill'?: ColumnFillProperty;
  'column-gap'?: ColumnGapProperty<TLength>;
  'column-rule-color'?: ColumnRuleColorProperty;
  'column-rule-style'?: ColumnRuleStyleProperty;
  'column-rule-width'?: ColumnRuleWidthProperty<TLength>;
  'column-span'?: ColumnSpanProperty;
  'column-width'?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  content?: ContentProperty;
  'counter-increment'?: CounterIncrementProperty;
  'counter-reset'?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  'empty-cells'?: EmptyCellsProperty;
  filter?: FilterProperty;
  'flex-basis'?: FlexBasisProperty<TLength>;
  'flex-direction'?: FlexDirectionProperty;
  'flex-grow'?: GlobalsNumber;
  'flex-shrink'?: GlobalsNumber;
  'flex-wrap'?: FlexWrapProperty;
  float?: FloatProperty;
  'font-family'?: FontFamilyProperty;
  'font-feature-settings'?: FontFeatureSettingsProperty;
  'font-kerning'?: FontKerningProperty;
  'font-language-override'?: FontLanguageOverrideProperty;
  'font-optical-sizing'?: FontOpticalSizingProperty;
  'font-size'?: FontSizeProperty<TLength>;
  'font-size-adjust'?: FontSizeAdjustProperty;
  'font-stretch'?: FontStretchProperty;
  'font-style'?: FontStyleProperty;
  'font-synthesis'?: FontSynthesisProperty;
  'font-variant'?: FontVariantProperty;
  'font-variant-caps'?: FontVariantCapsProperty;
  'font-variant-east-asian'?: FontVariantEastAsianProperty;
  'font-variant-ligatures'?: FontVariantLigaturesProperty;
  'font-variant-numeric'?: FontVariantNumericProperty;
  'font-variant-position'?: FontVariantPositionProperty;
  'font-variation-settings'?: FontVariationSettingsProperty;
  'font-weight'?: FontWeightProperty;
  'grid-auto-columns'?: GridAutoColumnsProperty<TLength>;
  'grid-auto-flow'?: GridAutoFlowProperty;
  'grid-auto-rows'?: GridAutoRowsProperty<TLength>;
  'grid-column-end'?: GridColumnEndProperty;
  'grid-column-start'?: GridColumnStartProperty;
  'grid-row-end'?: GridRowEndProperty;
  'grid-row-start'?: GridRowStartProperty;
  'grid-template-areas'?: GridTemplateAreasProperty;
  'grid-template-columns'?: GridTemplateColumnsProperty<TLength>;
  'grid-template-rows'?: GridTemplateRowsProperty<TLength>;
  'hanging-punctuation'?: HangingPunctuationProperty;
  height?: HeightProperty<TLength>;
  hyphens?: HyphensProperty;
  'image-orientation'?: ImageOrientationProperty;
  'image-rendering'?: ImageRenderingProperty;
  'image-resolution'?: ImageResolutionProperty;
  'initial-letter'?: InitialLetterProperty;
  'inline-size'?: InlineSizeProperty<TLength>;
  'inset-block-end'?: InsetBlockEndProperty<TLength>;
  'inset-block-start'?: InsetBlockStartProperty<TLength>;
  'inset-inline-end'?: InsetInlineEndProperty<TLength>;
  'inset-inline-start'?: InsetInlineStartProperty<TLength>;
  isolation?: IsolationProperty;
  'justify-content'?: JustifyContentProperty;
  'justify-items'?: JustifyItemsProperty;
  'justify-self'?: JustifySelfProperty;
  left?: LeftProperty<TLength>;
  'letter-spacing'?: LetterSpacingProperty<TLength>;
  'line-break'?: LineBreakProperty;
  'line-height'?: LineHeightProperty<TLength>;
  'list-style-image'?: ListStyleImageProperty;
  'list-style-position'?: ListStylePositionProperty;
  'list-style-type'?: ListStyleTypeProperty;
  'margin-block-end'?: MarginBlockEndProperty<TLength>;
  'margin-block-start'?: MarginBlockStartProperty<TLength>;
  'margin-bottom'?: MarginBottomProperty<TLength>;
  'margin-inline-end'?: MarginInlineEndProperty<TLength>;
  'margin-inline-start'?: MarginInlineStartProperty<TLength>;
  'margin-left'?: MarginLeftProperty<TLength>;
  'margin-right'?: MarginRightProperty<TLength>;
  'margin-top'?: MarginTopProperty<TLength>;
  'mask-border-mode'?: MaskBorderModeProperty;
  'mask-border-outset'?: MaskBorderOutsetProperty<TLength>;
  'mask-border-repeat'?: MaskBorderRepeatProperty;
  'mask-border-slice'?: MaskBorderSliceProperty;
  'mask-border-source'?: MaskBorderSourceProperty;
  'mask-border-width'?: MaskBorderWidthProperty<TLength>;
  'mask-clip'?: MaskClipProperty;
  'mask-composite'?: MaskCompositeProperty;
  'mask-image'?: MaskImageProperty;
  'mask-mode'?: MaskModeProperty;
  'mask-origin'?: MaskOriginProperty;
  'mask-position'?: MaskPositionProperty<TLength>;
  'mask-repeat'?: MaskRepeatProperty;
  'mask-size'?: MaskSizeProperty<TLength>;
  'mask-type'?: MaskTypeProperty;
  'max-block-size'?: MaxBlockSizeProperty<TLength>;
  'max-height'?: MaxHeightProperty<TLength>;
  'max-inline-size'?: MaxInlineSizeProperty<TLength>;
  'max-lines'?: MaxLinesProperty;
  'max-width'?: MaxWidthProperty<TLength>;
  'min-block-size'?: MinBlockSizeProperty<TLength>;
  'min-height'?: MinHeightProperty<TLength>;
  'min-inline-size'?: MinInlineSizeProperty<TLength>;
  'min-width'?: MinWidthProperty<TLength>;
  'mix-blend-mode'?: MixBlendModeProperty;
  'motion-offset'?: GlobalsString;
  'motion-path'?: MotionPathProperty;
  'motion-rotation'?: GlobalsString;
  'object-fit'?: ObjectFitProperty;
  'object-position'?: ObjectPositionProperty<TLength>;
  'offset-position'?: OffsetPositionProperty<TLength>;
  opacity?: GlobalsNumber;
  order?: GlobalsNumber;
  orphans?: GlobalsNumber;
  'outline-color'?: OutlineColorProperty;
  'outline-offset'?: OutlineOffsetProperty<TLength>;
  'outline-style'?: OutlineStyleProperty;
  'outline-width'?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  'overflow-anchor'?: OverflowAnchorProperty;
  'overflow-block'?: OverflowBlockProperty;
  'overflow-clip-box'?: OverflowClipBoxProperty;
  'overflow-inline'?: OverflowInlineProperty;
  'overflow-wrap'?: OverflowWrapProperty;
  'overflow-x'?: OverflowXProperty;
  'overflow-y'?: OverflowYProperty;
  'overscroll-behavior'?: OverscrollBehaviorProperty;
  'overscroll-behavior-x'?: OverscrollBehaviorXProperty;
  'overscroll-behavior-y'?: OverscrollBehaviorYProperty;
  'padding-block-end'?: PaddingBlockEndProperty<TLength>;
  'padding-block-start'?: PaddingBlockStartProperty<TLength>;
  'padding-bottom'?: PaddingBottomProperty<TLength>;
  'padding-inline-end'?: PaddingInlineEndProperty<TLength>;
  'padding-inline-start'?: PaddingInlineStartProperty<TLength>;
  'padding-left'?: PaddingLeftProperty<TLength>;
  'padding-right'?: PaddingRightProperty<TLength>;
  'padding-top'?: PaddingTopProperty<TLength>;
  'page-break-after'?: PageBreakAfterProperty;
  'page-break-before'?: PageBreakBeforeProperty;
  'page-break-inside'?: PageBreakInsideProperty;
  'paint-order'?: PaintOrderProperty;
  perspective?: PerspectiveProperty<TLength>;
  'perspective-origin'?: PerspectiveOriginProperty<TLength>;
  'place-content'?: PlaceContentProperty;
  'pointer-events'?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rotate?: RotateProperty;
  'row-gap'?: RowGapProperty<TLength>;
  'ruby-align'?: RubyAlignProperty;
  'ruby-merge'?: RubyMergeProperty;
  'ruby-position'?: RubyPositionProperty;
  scale?: ScaleProperty;
  'scroll-behavior'?: ScrollBehaviorProperty;
  'scroll-margin'?: ScrollMarginProperty<TLength>;
  'scroll-margin-block'?: ScrollMarginBlockProperty<TLength>;
  'scroll-margin-block-end'?: ScrollMarginBlockEndProperty<TLength>;
  'scroll-margin-block-start'?: ScrollMarginBlockStartProperty<TLength>;
  'scroll-margin-bottom'?: ScrollMarginBottomProperty<TLength>;
  'scroll-margin-inline-end'?: ScrollMarginInlineEndProperty<TLength>;
  'scroll-margin-inline-start'?: ScrollMarginInlineStartProperty<TLength>;
  'scroll-margin-left'?: ScrollMarginLeftProperty<TLength>;
  'scroll-margin-right'?: ScrollMarginRightProperty<TLength>;
  'scroll-margin-top'?: ScrollMarginTopProperty<TLength>;
  'scroll-padding'?: ScrollPaddingProperty<TLength>;
  'scroll-padding-block'?: ScrollPaddingBlockProperty<TLength>;
  'scroll-padding-block-end'?: ScrollPaddingBlockEndProperty<TLength>;
  'scroll-padding-block-start'?: ScrollPaddingBlockStartProperty<TLength>;
  'scroll-padding-bottom'?: ScrollPaddingBottomProperty<TLength>;
  'scroll-padding-inline'?: ScrollPaddingInlineProperty<TLength>;
  'scroll-padding-inline-end'?: ScrollPaddingInlineEndProperty<TLength>;
  'scroll-padding-inline-start'?: ScrollPaddingInlineStartProperty<TLength>;
  'scroll-padding-left'?: ScrollPaddingLeftProperty<TLength>;
  'scroll-padding-right'?: ScrollPaddingRightProperty<TLength>;
  'scroll-padding-top'?: ScrollPaddingTopProperty<TLength>;
  'scroll-snap-align'?: ScrollSnapAlignProperty;
  'scroll-snap-stop'?: ScrollSnapStopProperty;
  'scroll-snap-type'?: ScrollSnapTypeProperty;
  'scrollbar-color'?: ScrollbarColorProperty;
  'scrollbar-width'?: ScrollbarWidthProperty<TLength>;
  'shape-image-threshold'?: GlobalsNumber;
  'shape-margin'?: ShapeMarginProperty<TLength>;
  'shape-outside'?: ShapeOutsideProperty;
  'tab-size'?: TabSizeProperty<TLength>;
  'table-layout'?: TableLayoutProperty;
  'text-align'?: TextAlignProperty;
  'text-align-last'?: TextAlignLastProperty;
  'text-combine-upright'?: TextCombineUprightProperty;
  'text-decoration-color'?: TextDecorationColorProperty;
  'text-decoration-line'?: TextDecorationLineProperty;
  'text-decoration-skip'?: TextDecorationSkipProperty;
  'text-decoration-skip-ink'?: TextDecorationSkipInkProperty;
  'text-decoration-style'?: TextDecorationStyleProperty;
  'text-emphasis-color'?: TextEmphasisColorProperty;
  'text-emphasis-position'?: GlobalsString;
  'text-emphasis-style'?: TextEmphasisStyleProperty;
  'text-indent'?: TextIndentProperty<TLength>;
  'text-justify'?: TextJustifyProperty;
  'text-orientation'?: TextOrientationProperty;
  'text-overflow'?: TextOverflowProperty;
  'text-rendering'?: TextRenderingProperty;
  'text-shadow'?: TextShadowProperty;
  'text-size-adjust'?: TextSizeAdjustProperty;
  'text-transform'?: TextTransformProperty;
  'text-underline-position'?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  'touch-action'?: TouchActionProperty;
  transform?: TransformProperty;
  'transform-box'?: TransformBoxProperty;
  'transform-origin'?: TransformOriginProperty<TLength>;
  'transform-style'?: TransformStyleProperty;
  'transition-delay'?: GlobalsString;
  'transition-duration'?: GlobalsString;
  'transition-property'?: TransitionPropertyProperty;
  'transition-timing-function'?: TransitionTimingFunctionProperty;
  translate?: TranslateProperty<TLength>;
  'unicode-bidi'?: UnicodeBidiProperty;
  'user-select'?: UserSelectProperty;
  'vertical-align'?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  'white-space'?: WhiteSpaceProperty;
  widows?: GlobalsNumber;
  width?: WidthProperty<TLength>;
  'will-change'?: WillChangeProperty;
  'word-break'?: WordBreakProperty;
  'word-spacing'?: WordSpacingProperty<TLength>;
  'word-wrap'?: WordWrapProperty;
  'writing-mode'?: WritingModeProperty;
  'z-index'?: ZIndexProperty;
  zoom?: ZoomProperty;
}
export interface StandardShorthandPropertiesHyphen<TLength = string | 0> {
  all?: Globals;
  animation?: AnimationProperty;
  background?: BackgroundProperty<TLength>;
  border?: BorderProperty<TLength>;
  'border-block-end'?: BorderBlockEndProperty<TLength>;
  'border-block-start'?: BorderBlockStartProperty<TLength>;
  'border-bottom'?: BorderBottomProperty<TLength>;
  'border-color'?: BorderColorProperty;
  'border-image'?: BorderImageProperty;
  'border-inline-end'?: BorderInlineEndProperty<TLength>;
  'border-inline-start'?: BorderInlineStartProperty<TLength>;
  'border-left'?: BorderLeftProperty<TLength>;
  'border-radius'?: BorderRadiusProperty<TLength>;
  'border-right'?: BorderRightProperty<TLength>;
  'border-style'?: BorderStyleProperty;
  'border-top'?: BorderTopProperty<TLength>;
  'border-width'?: BorderWidthProperty<TLength>;
  'column-rule'?: ColumnRuleProperty<TLength>;
  columns?: ColumnsProperty<TLength>;
  flex?: FlexProperty<TLength>;
  'flex-flow'?: FlexFlowProperty;
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  grid?: GridProperty;
  'grid-area'?: GridAreaProperty;
  'grid-column'?: GridColumnProperty;
  'grid-row'?: GridRowProperty;
  'grid-template'?: GridTemplateProperty;
  'line-clamp'?: LineClampProperty;
  'list-style'?: ListStyleProperty;
  margin?: MarginProperty<TLength>;
  mask?: MaskProperty<TLength>;
  'mask-border'?: MaskBorderProperty;
  motion?: GlobalsString;
  outline?: OutlineProperty<TLength>;
  padding?: PaddingProperty<TLength>;
  'place-items'?: PlaceItemsProperty;
  'text-decoration'?: TextDecorationProperty;
  'text-emphasis'?: TextEmphasisProperty;
  transition?: TransitionProperty;
}
export interface StandardPropertiesHyphen<TLength = string | 0> extends StandardLonghandPropertiesHyphen<TLength>, StandardShorthandPropertiesHyphen<TLength> {
}
export interface VendorLonghandPropertiesHyphen<TLength = string | 0> {
  '-moz-animation-delay'?: GlobalsString;
  '-moz-animation-direction'?: AnimationDirectionProperty;
  '-moz-animation-duration'?: GlobalsString;
  '-moz-animation-fill-mode'?: AnimationFillModeProperty;
  '-moz-animation-iteration-count'?: AnimationIterationCountProperty;
  '-moz-animation-name'?: AnimationNameProperty;
  '-moz-animation-play-state'?: AnimationPlayStateProperty;
  '-moz-animation-timing-function'?: AnimationTimingFunctionProperty;
  '-moz-appearance'?: MozAppearanceProperty;
  '-moz-backface-visibility'?: BackfaceVisibilityProperty;
  '-moz-border-bottom-colors'?: MozBorderBottomColorsProperty;
  '-moz-border-end-color'?: BorderInlineEndColorProperty;
  '-moz-border-end-style'?: BorderInlineEndStyleProperty;
  '-moz-border-end-width'?: BorderInlineEndWidthProperty<TLength>;
  '-moz-border-left-colors'?: MozBorderLeftColorsProperty;
  '-moz-border-right-colors'?: MozBorderRightColorsProperty;
  '-moz-border-start-color'?: BorderInlineStartColorProperty;
  '-moz-border-start-style'?: BorderInlineStartStyleProperty;
  '-moz-border-top-colors'?: MozBorderTopColorsProperty;
  '-moz-box-sizing'?: BoxSizingProperty;
  '-moz-column-count'?: ColumnCountProperty;
  '-moz-column-fill'?: ColumnFillProperty;
  '-moz-column-gap'?: ColumnGapProperty<TLength>;
  '-moz-column-rule-color'?: ColumnRuleColorProperty;
  '-moz-column-rule-style'?: ColumnRuleStyleProperty;
  '-moz-column-rule-width'?: ColumnRuleWidthProperty<TLength>;
  '-moz-column-width'?: ColumnWidthProperty<TLength>;
  '-moz-context-properties'?: MozContextPropertiesProperty;
  '-moz-float-edge'?: MozFloatEdgeProperty;
  '-moz-font-feature-settings'?: FontFeatureSettingsProperty;
  '-moz-font-language-override'?: FontLanguageOverrideProperty;
  '-moz-force-broken-image-icon'?: GlobalsNumber;
  '-moz-hyphens'?: HyphensProperty;
  '-moz-image-region'?: MozImageRegionProperty;
  '-moz-margin-end'?: MarginInlineEndProperty<TLength>;
  '-moz-margin-start'?: MarginInlineStartProperty<TLength>;
  '-moz-orient'?: MozOrientProperty;
  '-moz-outline-radius-bottomleft'?: MozOutlineRadiusBottomleftProperty<TLength>;
  '-moz-outline-radius-bottomright'?: MozOutlineRadiusBottomrightProperty<TLength>;
  '-moz-outline-radius-topleft'?: MozOutlineRadiusTopleftProperty<TLength>;
  '-moz-outline-radius-topright'?: MozOutlineRadiusToprightProperty<TLength>;
  '-moz-padding-end'?: PaddingInlineEndProperty<TLength>;
  '-moz-padding-start'?: PaddingInlineStartProperty<TLength>;
  '-moz-perspective'?: PerspectiveProperty<TLength>;
  '-moz-perspective-origin'?: PerspectiveOriginProperty<TLength>;
  '-moz-stack-sizing'?: MozStackSizingProperty;
  '-moz-tab-size'?: TabSizeProperty<TLength>;
  '-moz-text-size-adjust'?: TextSizeAdjustProperty;
  '-moz-transform-origin'?: TransformOriginProperty<TLength>;
  '-moz-transform-style'?: TransformStyleProperty;
  '-moz-transition-delay'?: GlobalsString;
  '-moz-transition-duration'?: GlobalsString;
  '-moz-transition-property'?: TransitionPropertyProperty;
  '-moz-transition-timing-function'?: TransitionTimingFunctionProperty;
  '-moz-user-focus'?: MozUserFocusProperty;
  '-moz-user-modify'?: MozUserModifyProperty;
  '-moz-user-select'?: UserSelectProperty;
  '-moz-window-dragging'?: MozWindowDraggingProperty;
  '-moz-window-shadow'?: MozWindowShadowProperty;
  '-ms-accelerator'?: MsAcceleratorProperty;
  '-ms-align-self'?: AlignSelfProperty;
  '-ms-block-progression'?: MsBlockProgressionProperty;
  '-ms-content-zoom-chaining'?: MsContentZoomChainingProperty;
  '-ms-content-zoom-limit-max'?: GlobalsString;
  '-ms-content-zoom-limit-min'?: GlobalsString;
  '-ms-content-zoom-snap-points'?: GlobalsString;
  '-ms-content-zoom-snap-type'?: MsContentZoomSnapTypeProperty;
  '-ms-content-zooming'?: MsContentZoomingProperty;
  '-ms-filter'?: GlobalsString;
  '-ms-flex-direction'?: FlexDirectionProperty;
  '-ms-flex-positive'?: GlobalsNumber;
  '-ms-flow-from'?: MsFlowFromProperty;
  '-ms-flow-into'?: MsFlowIntoProperty;
  '-ms-grid-columns'?: GridAutoColumnsProperty<TLength>;
  '-ms-grid-rows'?: GridAutoRowsProperty<TLength>;
  '-ms-high-contrast-adjust'?: MsHighContrastAdjustProperty;
  '-ms-hyphenate-limit-chars'?: MsHyphenateLimitCharsProperty;
  '-ms-hyphenate-limit-lines'?: MsHyphenateLimitLinesProperty;
  '-ms-hyphenate-limit-zone'?: MsHyphenateLimitZoneProperty<TLength>;
  '-ms-hyphens'?: HyphensProperty;
  '-ms-ime-align'?: MsImeAlignProperty;
  '-ms-line-break'?: LineBreakProperty;
  '-ms-order'?: GlobalsNumber;
  '-ms-overflow-style'?: MsOverflowStyleProperty;
  '-ms-overflow-x'?: OverflowXProperty;
  '-ms-overflow-y'?: OverflowYProperty;
  '-ms-scroll-chaining'?: MsScrollChainingProperty;
  '-ms-scroll-limit-x-max'?: MsScrollLimitXMaxProperty<TLength>;
  '-ms-scroll-limit-x-min'?: MsScrollLimitXMinProperty<TLength>;
  '-ms-scroll-limit-y-max'?: MsScrollLimitYMaxProperty<TLength>;
  '-ms-scroll-limit-y-min'?: MsScrollLimitYMinProperty<TLength>;
  '-ms-scroll-rails'?: MsScrollRailsProperty;
  '-ms-scroll-snap-points-x'?: GlobalsString;
  '-ms-scroll-snap-points-y'?: GlobalsString;
  '-ms-scroll-snap-type'?: MsScrollSnapTypeProperty;
  '-ms-scroll-translation'?: MsScrollTranslationProperty;
  '-ms-text-autospace'?: MsTextAutospaceProperty;
  '-ms-text-combine-horizontal'?: TextCombineUprightProperty;
  '-ms-text-overflow'?: TextOverflowProperty;
  '-ms-text-size-adjust'?: TextSizeAdjustProperty;
  '-ms-touch-action'?: TouchActionProperty;
  '-ms-touch-select'?: MsTouchSelectProperty;
  '-ms-transform'?: TransformProperty;
  '-ms-transform-origin'?: TransformOriginProperty<TLength>;
  '-ms-user-select'?: MsUserSelectProperty;
  '-ms-word-break'?: WordBreakProperty;
  '-ms-wrap-flow'?: MsWrapFlowProperty;
  '-ms-wrap-margin'?: MsWrapMarginProperty<TLength>;
  '-ms-wrap-through'?: MsWrapThroughProperty;
  '-ms-writing-mode'?: WritingModeProperty;
  '-o-object-fit'?: ObjectFitProperty;
  '-o-object-position'?: ObjectPositionProperty<TLength>;
  '-o-tab-size'?: TabSizeProperty<TLength>;
  '-o-text-overflow'?: TextOverflowProperty;
  '-o-transform-origin'?: TransformOriginProperty<TLength>;
  '-webkit-align-content'?: AlignContentProperty;
  '-webkit-align-items'?: AlignItemsProperty;
  '-webkit-align-self'?: AlignSelfProperty;
  '-webkit-animation-delay'?: GlobalsString;
  '-webkit-animation-direction'?: AnimationDirectionProperty;
  '-webkit-animation-duration'?: GlobalsString;
  '-webkit-animation-fill-mode'?: AnimationFillModeProperty;
  '-webkit-animation-iteration-count'?: AnimationIterationCountProperty;
  '-webkit-animation-name'?: AnimationNameProperty;
  '-webkit-animation-play-state'?: AnimationPlayStateProperty;
  '-webkit-animation-timing-function'?: AnimationTimingFunctionProperty;
  '-webkit-appearance'?: WebkitAppearanceProperty;
  '-webkit-backdrop-filter'?: BackdropFilterProperty;
  '-webkit-backface-visibility'?: BackfaceVisibilityProperty;
  '-webkit-background-clip'?: BackgroundClipProperty;
  '-webkit-background-origin'?: BackgroundOriginProperty;
  '-webkit-background-size'?: BackgroundSizeProperty<TLength>;
  '-webkit-border-before-color'?: WebkitBorderBeforeColorProperty;
  '-webkit-border-before-style'?: WebkitBorderBeforeStyleProperty;
  '-webkit-border-before-width'?: WebkitBorderBeforeWidthProperty<TLength>;
  '-webkit-border-bottom-left-radius'?: BorderBottomLeftRadiusProperty<TLength>;
  '-webkit-border-bottom-right-radius'?: BorderBottomRightRadiusProperty<TLength>;
  '-webkit-border-image-slice'?: BorderImageSliceProperty;
  '-webkit-border-top-left-radius'?: BorderTopLeftRadiusProperty<TLength>;
  '-webkit-border-top-right-radius'?: BorderTopRightRadiusProperty<TLength>;
  '-webkit-box-decoration-break'?: BoxDecorationBreakProperty;
  '-webkit-box-reflect'?: WebkitBoxReflectProperty<TLength>;
  '-webkit-box-shadow'?: BoxShadowProperty;
  '-webkit-box-sizing'?: BoxSizingProperty;
  '-webkit-clip-path'?: ClipPathProperty;
  '-webkit-color-adjust'?: ColorAdjustProperty;
  '-webkit-column-count'?: ColumnCountProperty;
  '-webkit-column-gap'?: ColumnGapProperty<TLength>;
  '-webkit-column-rule-color'?: ColumnRuleColorProperty;
  '-webkit-column-rule-style'?: ColumnRuleStyleProperty;
  '-webkit-column-rule-width'?: ColumnRuleWidthProperty<TLength>;
  '-webkit-column-span'?: ColumnSpanProperty;
  '-webkit-column-width'?: ColumnWidthProperty<TLength>;
  '-webkit-filter'?: FilterProperty;
  '-webkit-flex-basis'?: FlexBasisProperty<TLength>;
  '-webkit-flex-direction'?: FlexDirectionProperty;
  '-webkit-flex-grow'?: GlobalsNumber;
  '-webkit-flex-shrink'?: GlobalsNumber;
  '-webkit-flex-wrap'?: FlexWrapProperty;
  '-webkit-font-feature-settings'?: FontFeatureSettingsProperty;
  '-webkit-font-kerning'?: FontKerningProperty;
  '-webkit-font-variant-ligatures'?: FontVariantLigaturesProperty;
  '-webkit-hyphens'?: HyphensProperty;
  '-webkit-justify-content'?: JustifyContentProperty;
  '-webkit-line-break'?: LineBreakProperty;
  '-webkit-margin-end'?: MarginInlineEndProperty<TLength>;
  '-webkit-margin-start'?: MarginInlineStartProperty<TLength>;
  '-webkit-mask-attachment'?: WebkitMaskAttachmentProperty;
  '-webkit-mask-clip'?: WebkitMaskClipProperty;
  '-webkit-mask-composite'?: WebkitMaskCompositeProperty;
  '-webkit-mask-image'?: WebkitMaskImageProperty;
  '-webkit-mask-origin'?: WebkitMaskOriginProperty;
  '-webkit-mask-position'?: WebkitMaskPositionProperty<TLength>;
  '-webkit-mask-position-x'?: WebkitMaskPositionXProperty<TLength>;
  '-webkit-mask-position-y'?: WebkitMaskPositionYProperty<TLength>;
  '-webkit-mask-repeat'?: WebkitMaskRepeatProperty;
  '-webkit-mask-repeat-x'?: WebkitMaskRepeatXProperty;
  '-webkit-mask-repeat-y'?: WebkitMaskRepeatYProperty;
  '-webkit-mask-size'?: WebkitMaskSizeProperty<TLength>;
  '-webkit-max-inline-size'?: MaxInlineSizeProperty<TLength>;
  '-webkit-order'?: GlobalsNumber;
  '-webkit-overflow-scrolling'?: WebkitOverflowScrollingProperty;
  '-webkit-padding-end'?: PaddingInlineEndProperty<TLength>;
  '-webkit-padding-start'?: PaddingInlineStartProperty<TLength>;
  '-webkit-perspective'?: PerspectiveProperty<TLength>;
  '-webkit-perspective-origin'?: PerspectiveOriginProperty<TLength>;
  '-webkit-scroll-snap-type'?: ScrollSnapTypeProperty;
  '-webkit-shape-margin'?: ShapeMarginProperty<TLength>;
  '-webkit-tap-highlight-color'?: WebkitTapHighlightColorProperty;
  '-webkit-text-combine'?: TextCombineUprightProperty;
  '-webkit-text-decoration-color'?: TextDecorationColorProperty;
  '-webkit-text-decoration-line'?: TextDecorationLineProperty;
  '-webkit-text-decoration-skip'?: TextDecorationSkipProperty;
  '-webkit-text-decoration-style'?: TextDecorationStyleProperty;
  '-webkit-text-emphasis-color'?: TextEmphasisColorProperty;
  '-webkit-text-emphasis-position'?: GlobalsString;
  '-webkit-text-emphasis-style'?: TextEmphasisStyleProperty;
  '-webkit-text-fill-color'?: WebkitTextFillColorProperty;
  '-webkit-text-orientation'?: TextOrientationProperty;
  '-webkit-text-size-adjust'?: TextSizeAdjustProperty;
  '-webkit-text-stroke-color'?: WebkitTextStrokeColorProperty;
  '-webkit-text-stroke-width'?: WebkitTextStrokeWidthProperty<TLength>;
  '-webkit-touch-callout'?: WebkitTouchCalloutProperty;
  '-webkit-transform'?: TransformProperty;
  '-webkit-transform-origin'?: TransformOriginProperty<TLength>;
  '-webkit-transform-style'?: TransformStyleProperty;
  '-webkit-transition-delay'?: GlobalsString;
  '-webkit-transition-duration'?: GlobalsString;
  '-webkit-transition-property'?: TransitionPropertyProperty;
  '-webkit-transition-timing-function'?: TransitionTimingFunctionProperty;
  '-webkit-user-modify'?: WebkitUserModifyProperty;
  '-webkit-user-select'?: UserSelectProperty;
  '-webkit-writing-mode'?: WritingModeProperty;
}
export interface VendorShorthandPropertiesHyphen<TLength = string | 0> {
  '-moz-animation'?: AnimationProperty;
  '-moz-border-image'?: BorderImageProperty;
  '-moz-column-rule'?: ColumnRuleProperty<TLength>;
  '-moz-columns'?: ColumnsProperty<TLength>;
  '-moz-transition'?: TransitionProperty;
  '-ms-content-zoom-limit'?: GlobalsString;
  '-ms-content-zoom-snap'?: MsContentZoomSnapProperty;
  '-ms-flex'?: FlexProperty<TLength>;
  '-ms-scroll-limit'?: GlobalsString;
  '-ms-scroll-snap-x'?: GlobalsString;
  '-ms-scroll-snap-y'?: GlobalsString;
  '-o-border-image'?: BorderImageProperty;
  '-webkit-animation'?: AnimationProperty;
  '-webkit-border-before'?: WebkitBorderBeforeProperty<TLength>;
  '-webkit-border-image'?: BorderImageProperty;
  '-webkit-border-radius'?: BorderRadiusProperty<TLength>;
  '-webkit-column-rule'?: ColumnRuleProperty<TLength>;
  '-webkit-columns'?: ColumnsProperty<TLength>;
  '-webkit-flex'?: FlexProperty<TLength>;
  '-webkit-flex-flow'?: FlexFlowProperty;
  '-webkit-line-clamp'?: WebkitLineClampProperty;
  '-webkit-mask'?: WebkitMaskProperty<TLength>;
  '-webkit-text-emphasis'?: TextEmphasisProperty;
  '-webkit-text-stroke'?: WebkitTextStrokeProperty<TLength>;
  '-webkit-transition'?: TransitionProperty;
}
export interface VendorPropertiesHyphen<TLength = string | 0> extends VendorLonghandPropertiesHyphen<TLength>, VendorShorthandPropertiesHyphen<TLength> {
}
export interface ObsoletePropertiesHyphen<TLength = string | 0> {
  'box-align'?: BoxAlignProperty;
  'box-direction'?: BoxDirectionProperty;
  'box-flex'?: GlobalsNumber;
  'box-flex-group'?: GlobalsNumber;
  'box-lines'?: BoxLinesProperty;
  'box-ordinal-group'?: GlobalsNumber;
  'box-orient'?: BoxOrientProperty;
  'box-pack'?: BoxPackProperty;
  clip?: ClipProperty;
  'font-variant-alternates'?: FontVariantAlternatesProperty;
  'grid-column-gap'?: GridColumnGapProperty<TLength>;
  'grid-gap'?: GridGapProperty<TLength>;
  'grid-row-gap'?: GridRowGapProperty<TLength>;
  'ime-mode'?: ImeModeProperty;
  'offset-block-end'?: InsetBlockEndProperty<TLength>;
  'offset-block-start'?: InsetBlockStartProperty<TLength>;
  'offset-inline-end'?: InsetInlineEndProperty<TLength>;
  'offset-inline-start'?: InsetInlineStartProperty<TLength>;
  'scroll-snap-coordinate'?: ScrollSnapCoordinateProperty<TLength>;
  'scroll-snap-destination'?: ScrollSnapDestinationProperty<TLength>;
  'scroll-snap-points-x'?: ScrollSnapPointsXProperty;
  'scroll-snap-points-y'?: ScrollSnapPointsYProperty;
  'scroll-snap-type-x'?: ScrollSnapTypeXProperty;
  'scroll-snap-type-y'?: ScrollSnapTypeYProperty;
  'text-combine-horizontal'?: TextCombineUprightProperty;
  '-khtml-box-align'?: BoxAlignProperty;
  '-khtml-box-direction'?: BoxDirectionProperty;
  '-khtml-box-flex'?: GlobalsNumber;
  '-khtml-box-flex-group'?: GlobalsNumber;
  '-khtml-box-lines'?: BoxLinesProperty;
  '-khtml-box-ordinal-group'?: GlobalsNumber;
  '-khtml-box-orient'?: BoxOrientProperty;
  '-khtml-box-pack'?: BoxPackProperty;
  '-moz-background-clip'?: BackgroundClipProperty;
  '-moz-background-inline-policy'?: BoxDecorationBreakProperty;
  '-moz-background-origin'?: BackgroundOriginProperty;
  '-moz-background-size'?: BackgroundSizeProperty<TLength>;
  '-moz-binding'?: MozBindingProperty;
  '-moz-border-radius'?: BorderRadiusProperty<TLength>;
  '-moz-border-radius-bottomleft'?: BorderBottomLeftRadiusProperty<TLength>;
  '-moz-border-radius-bottomright'?: BorderBottomRightRadiusProperty<TLength>;
  '-moz-border-radius-topleft'?: BorderTopLeftRadiusProperty<TLength>;
  '-moz-border-radius-topright'?: BorderTopRightRadiusProperty<TLength>;
  '-moz-box-align'?: BoxAlignProperty;
  '-moz-box-direction'?: BoxDirectionProperty;
  '-moz-box-flex'?: GlobalsNumber;
  '-moz-box-ordinal-group'?: GlobalsNumber;
  '-moz-box-orient'?: BoxOrientProperty;
  '-moz-box-pack'?: BoxPackProperty;
  '-moz-box-shadow'?: BoxShadowProperty;
  '-moz-opacity'?: GlobalsNumber;
  '-moz-outline'?: OutlineProperty<TLength>;
  '-moz-outline-color'?: OutlineColorProperty;
  '-moz-outline-radius'?: MozOutlineRadiusProperty<TLength>;
  '-moz-outline-style'?: OutlineStyleProperty;
  '-moz-outline-width'?: OutlineWidthProperty<TLength>;
  '-moz-resize'?: ResizeProperty;
  '-moz-text-align-last'?: TextAlignLastProperty;
  '-moz-text-blink'?: MozTextBlinkProperty;
  '-moz-text-decoration-color'?: TextDecorationColorProperty;
  '-moz-text-decoration-line'?: TextDecorationLineProperty;
  '-moz-text-decoration-style'?: TextDecorationStyleProperty;
  '-moz-user-input'?: MozUserInputProperty;
  '-ms-ime-mode'?: ImeModeProperty;
  '-ms-scrollbar-3dlight-color'?: MsScrollbar3dlightColorProperty;
  '-ms-scrollbar-arrow-color'?: MsScrollbarArrowColorProperty;
  '-ms-scrollbar-base-color'?: MsScrollbarBaseColorProperty;
  '-ms-scrollbar-darkshadow-color'?: MsScrollbarDarkshadowColorProperty;
  '-ms-scrollbar-face-color'?: MsScrollbarFaceColorProperty;
  '-ms-scrollbar-highlight-color'?: MsScrollbarHighlightColorProperty;
  '-ms-scrollbar-shadow-color'?: MsScrollbarShadowColorProperty;
  '-ms-scrollbar-track-color'?: MsScrollbarTrackColorProperty;
  '-o-animation'?: AnimationProperty;
  '-o-animation-delay'?: GlobalsString;
  '-o-animation-direction'?: AnimationDirectionProperty;
  '-o-animation-duration'?: GlobalsString;
  '-o-animation-fill-mode'?: AnimationFillModeProperty;
  '-o-animation-iteration-count'?: AnimationIterationCountProperty;
  '-o-animation-name'?: AnimationNameProperty;
  '-o-animation-play-state'?: AnimationPlayStateProperty;
  '-o-animation-timing-function'?: AnimationTimingFunctionProperty;
  '-o-background-size'?: BackgroundSizeProperty<TLength>;
  '-o-transform'?: TransformProperty;
  '-o-transition'?: TransitionProperty;
  '-o-transition-delay'?: GlobalsString;
  '-o-transition-duration'?: GlobalsString;
  '-o-transition-property'?: TransitionPropertyProperty;
  '-o-transition-timing-function'?: TransitionTimingFunctionProperty;
  '-webkit-box-align'?: BoxAlignProperty;
  '-webkit-box-direction'?: BoxDirectionProperty;
  '-webkit-box-flex'?: GlobalsNumber;
  '-webkit-box-flex-group'?: GlobalsNumber;
  '-webkit-box-lines'?: BoxLinesProperty;
  '-webkit-box-ordinal-group'?: GlobalsNumber;
  '-webkit-box-orient'?: BoxOrientProperty;
  '-webkit-box-pack'?: BoxPackProperty;
  '-webkit-scroll-snap-points-x'?: ScrollSnapPointsXProperty;
  '-webkit-scroll-snap-points-y'?: ScrollSnapPointsYProperty;
}
export interface SvgPropertiesHyphen<TLength = string | 0> {
  'alignment-baseline'?: AlignmentBaselineProperty;
  'baseline-shift'?: BaselineShiftProperty<TLength>;
  clip?: ClipProperty;
  'clip-path'?: ClipPathProperty;
  'clip-rule'?: ClipRuleProperty;
  color?: ColorProperty;
  'color-interpolation'?: ColorInterpolationProperty;
  'color-rendering'?: ColorRenderingProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  'dominant-baseline'?: DominantBaselineProperty;
  fill?: FillProperty;
  'fill-opacity'?: GlobalsNumber;
  'fill-rule'?: FillRuleProperty;
  filter?: FilterProperty;
  'flood-color'?: FloodColorProperty;
  'flood-opacity'?: GlobalsNumber;
  font?: FontProperty;
  'font-family'?: FontFamilyProperty;
  'font-size'?: FontSizeProperty<TLength>;
  'font-size-adjust'?: FontSizeAdjustProperty;
  'font-stretch'?: FontStretchProperty;
  'font-style'?: FontStyleProperty;
  'font-variant'?: FontVariantProperty;
  'font-weight'?: FontWeightProperty;
  'glyph-orientation-vertical'?: GlyphOrientationVerticalProperty;
  'image-rendering'?: ImageRenderingProperty;
  'letter-spacing'?: LetterSpacingProperty<TLength>;
  'lighting-color'?: LightingColorProperty;
  'line-height'?: LineHeightProperty<TLength>;
  marker?: MarkerProperty;
  'marker-end'?: MarkerEndProperty;
  'marker-mid'?: MarkerMidProperty;
  'marker-start'?: MarkerStartProperty;
  mask?: MaskProperty<TLength>;
  opacity?: GlobalsNumber;
  overflow?: OverflowProperty;
  'paint-order'?: PaintOrderProperty;
  'pointer-events'?: PointerEventsProperty;
  'shape-rendering'?: ShapeRenderingProperty;
  'stop-color'?: StopColorProperty;
  'stop-opacity'?: GlobalsNumber;
  stroke?: StrokeProperty;
  'stroke-dasharray'?: StrokeDasharrayProperty<TLength>;
  'stroke-dashoffset'?: StrokeDashoffsetProperty<TLength>;
  'stroke-linecap'?: StrokeLinecapProperty;
  'stroke-linejoin'?: StrokeLinejoinProperty;
  'stroke-miterlimit'?: GlobalsNumber;
  'stroke-opacity'?: GlobalsNumber;
  'stroke-width'?: StrokeWidthProperty<TLength>;
  'text-anchor'?: TextAnchorProperty;
  'text-decoration'?: TextDecorationProperty;
  'text-rendering'?: TextRenderingProperty;
  'unicode-bidi'?: UnicodeBidiProperty;
  'vector-effect'?: VectorEffectProperty;
  visibility?: VisibilityProperty;
  'white-space'?: WhiteSpaceProperty;
  'word-spacing'?: WordSpacingProperty<TLength>;
  'writing-mode'?: WritingModeProperty;
}
export interface PropertiesHyphen<TLength = string | 0> extends StandardPropertiesHyphen<TLength>, VendorPropertiesHyphen<TLength>, ObsoletePropertiesHyphen<TLength>, SvgPropertiesHyphen<TLength> {
}
export interface StandardLonghandPropertiesFallback<TLength = string | 0> {
  alignContent?: AlignContentProperty | AlignContentProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  animationDelay?: GlobalsString | GlobalsString[];
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  animationDuration?: GlobalsString | GlobalsString[];
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  blockOverflow?: BlockOverflowProperty | BlockOverflowProperty[];
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  caretColor?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  colorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  counterReset?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexGrow?: GlobalsNumber | GlobalsNumber[];
  flexShrink?: GlobalsNumber | GlobalsNumber[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  fontOpticalSizing?: FontOpticalSizingProperty | FontOpticalSizingProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  hyphens?: HyphensProperty | HyphensProperty[];
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  insetBlockEnd?: InsetBlockEndProperty<TLength> | InsetBlockEndProperty<TLength>[];
  insetBlockStart?: InsetBlockStartProperty<TLength> | InsetBlockStartProperty<TLength>[];
  insetInlineEnd?: InsetInlineEndProperty<TLength> | InsetInlineEndProperty<TLength>[];
  insetInlineStart?: InsetInlineStartProperty<TLength> | InsetInlineStartProperty<TLength>[];
  isolation?: IsolationProperty | IsolationProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  justifyItems?: JustifyItemsProperty | JustifyItemsProperty[];
  justifySelf?: JustifySelfProperty | JustifySelfProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  marginBlockEnd?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  marginBlockStart?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  marginInlineEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  marginInlineStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  maskClip?: MaskClipProperty | MaskClipProperty[];
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  maskImage?: MaskImageProperty | MaskImageProperty[];
  maskMode?: MaskModeProperty | MaskModeProperty[];
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  maxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  maxLines?: MaxLinesProperty | MaxLinesProperty[];
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  minBlockSize?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  minInlineSize?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  motionOffset?: GlobalsString | GlobalsString[];
  motionPath?: MotionPathProperty | MotionPathProperty[];
  motionRotation?: GlobalsString | GlobalsString[];
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  order?: GlobalsNumber | GlobalsNumber[];
  orphans?: GlobalsNumber | GlobalsNumber[];
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  overflowAnchor?: OverflowAnchorProperty | OverflowAnchorProperty[];
  overflowBlock?: OverflowBlockProperty | OverflowBlockProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowInline?: OverflowInlineProperty | OverflowInlineProperty[];
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  overflowX?: OverflowXProperty | OverflowXProperty[];
  overflowY?: OverflowYProperty | OverflowYProperty[];
  overscrollBehavior?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  overscrollBehaviorX?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  overscrollBehaviorY?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  paddingBlockEnd?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  paddingBlockStart?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  paddingInlineEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  paddingInlineStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  placeContent?: PlaceContentProperty | PlaceContentProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rotate?: RotateProperty | RotateProperty[];
  rowGap?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  scale?: ScaleProperty | ScaleProperty[];
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  scrollMargin?: ScrollMarginProperty<TLength> | ScrollMarginProperty<TLength>[];
  scrollMarginBlock?: ScrollMarginBlockProperty<TLength> | ScrollMarginBlockProperty<TLength>[];
  scrollMarginBlockEnd?: ScrollMarginBlockEndProperty<TLength> | ScrollMarginBlockEndProperty<TLength>[];
  scrollMarginBlockStart?: ScrollMarginBlockStartProperty<TLength> | ScrollMarginBlockStartProperty<TLength>[];
  scrollMarginBottom?: ScrollMarginBottomProperty<TLength> | ScrollMarginBottomProperty<TLength>[];
  scrollMarginInlineEnd?: ScrollMarginInlineEndProperty<TLength> | ScrollMarginInlineEndProperty<TLength>[];
  scrollMarginInlineStart?: ScrollMarginInlineStartProperty<TLength> | ScrollMarginInlineStartProperty<TLength>[];
  scrollMarginLeft?: ScrollMarginLeftProperty<TLength> | ScrollMarginLeftProperty<TLength>[];
  scrollMarginRight?: ScrollMarginRightProperty<TLength> | ScrollMarginRightProperty<TLength>[];
  scrollMarginTop?: ScrollMarginTopProperty<TLength> | ScrollMarginTopProperty<TLength>[];
  scrollPadding?: ScrollPaddingProperty<TLength> | ScrollPaddingProperty<TLength>[];
  scrollPaddingBlock?: ScrollPaddingBlockProperty<TLength> | ScrollPaddingBlockProperty<TLength>[];
  scrollPaddingBlockEnd?: ScrollPaddingBlockEndProperty<TLength> | ScrollPaddingBlockEndProperty<TLength>[];
  scrollPaddingBlockStart?: ScrollPaddingBlockStartProperty<TLength> | ScrollPaddingBlockStartProperty<TLength>[];
  scrollPaddingBottom?: ScrollPaddingBottomProperty<TLength> | ScrollPaddingBottomProperty<TLength>[];
  scrollPaddingInline?: ScrollPaddingInlineProperty<TLength> | ScrollPaddingInlineProperty<TLength>[];
  scrollPaddingInlineEnd?: ScrollPaddingInlineEndProperty<TLength> | ScrollPaddingInlineEndProperty<TLength>[];
  scrollPaddingInlineStart?: ScrollPaddingInlineStartProperty<TLength> | ScrollPaddingInlineStartProperty<TLength>[];
  scrollPaddingLeft?: ScrollPaddingLeftProperty<TLength> | ScrollPaddingLeftProperty<TLength>[];
  scrollPaddingRight?: ScrollPaddingRightProperty<TLength> | ScrollPaddingRightProperty<TLength>[];
  scrollPaddingTop?: ScrollPaddingTopProperty<TLength> | ScrollPaddingTopProperty<TLength>[];
  scrollSnapAlign?: ScrollSnapAlignProperty | ScrollSnapAlignProperty[];
  scrollSnapStop?: ScrollSnapStopProperty | ScrollSnapStopProperty[];
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  scrollbarColor?: ScrollbarColorProperty | ScrollbarColorProperty[];
  scrollbarWidth?: ScrollbarWidthProperty<TLength> | ScrollbarWidthProperty<TLength>[];
  shapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  textEmphasisPosition?: GlobalsString | GlobalsString[];
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  textShadow?: TextShadowProperty | TextShadowProperty[];
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  touchAction?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  transitionDelay?: GlobalsString | GlobalsString[];
  transitionDuration?: GlobalsString | GlobalsString[];
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  userSelect?: UserSelectProperty | UserSelectProperty[];
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: GlobalsNumber | GlobalsNumber[];
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  willChange?: WillChangeProperty | WillChangeProperty[];
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
  zIndex?: ZIndexProperty | ZIndexProperty[];
  zoom?: ZoomProperty | ZoomProperty[];
}
export interface StandardShorthandPropertiesFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  animation?: AnimationProperty | AnimationProperty[];
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  borderBlockEnd?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  borderBlockStart?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  borderColor?: BorderColorProperty | BorderColorProperty[];
  borderImage?: BorderImageProperty | BorderImageProperty[];
  borderInlineEnd?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  borderInlineStart?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  grid?: GridProperty | GridProperty[];
  gridArea?: GridAreaProperty | GridAreaProperty[];
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  gridRow?: GridRowProperty | GridRowProperty[];
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  lineClamp?: LineClampProperty | LineClampProperty[];
  listStyle?: ListStyleProperty | ListStyleProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  motion?: GlobalsString | GlobalsString[];
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  placeItems?: PlaceItemsProperty | PlaceItemsProperty[];
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  transition?: TransitionProperty | TransitionProperty[];
}
export interface StandardPropertiesFallback<TLength = string | 0> extends StandardLonghandPropertiesFallback<TLength>, StandardShorthandPropertiesFallback<TLength> {
}
export interface VendorLonghandPropertiesFallback<TLength = string | 0> {
  MozAnimationDelay?: GlobalsString | GlobalsString[];
  MozAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  MozAnimationDuration?: GlobalsString | GlobalsString[];
  MozAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  MozAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  MozAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  MozAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  MozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  MozBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  MozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  MozBorderEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  MozBorderEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  MozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  MozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  MozBorderStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  MozBorderStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  MozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  MozBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  MozColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  MozColumnFill?: ColumnFillProperty | ColumnFillProperty[];
  MozColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  MozColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  MozColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  MozColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  MozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  MozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  MozFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  MozFontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  MozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[];
  MozHyphens?: HyphensProperty | HyphensProperty[];
  MozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  MozMarginEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  MozMarginStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  MozOrient?: MozOrientProperty | MozOrientProperty[];
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[];
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[];
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[];
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[];
  MozPaddingEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  MozPaddingStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  MozPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  MozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  MozTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  MozTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  MozTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  MozTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  MozTransitionDelay?: GlobalsString | GlobalsString[];
  MozTransitionDuration?: GlobalsString | GlobalsString[];
  MozTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  MozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  MozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  MozUserSelect?: UserSelectProperty | UserSelectProperty[];
  MozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  MozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  msAccelerator?: MsAcceleratorProperty | MsAcceleratorProperty[];
  msAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
  msBlockProgression?: MsBlockProgressionProperty | MsBlockProgressionProperty[];
  msContentZoomChaining?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[];
  msContentZoomLimitMax?: GlobalsString | GlobalsString[];
  msContentZoomLimitMin?: GlobalsString | GlobalsString[];
  msContentZoomSnapPoints?: GlobalsString | GlobalsString[];
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[];
  msContentZooming?: MsContentZoomingProperty | MsContentZoomingProperty[];
  msFilter?: GlobalsString | GlobalsString[];
  msFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  msFlexPositive?: GlobalsNumber | GlobalsNumber[];
  msFlowFrom?: MsFlowFromProperty | MsFlowFromProperty[];
  msFlowInto?: MsFlowIntoProperty | MsFlowIntoProperty[];
  msGridColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  msGridRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  msHighContrastAdjust?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[];
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[];
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[];
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[];
  msHyphens?: HyphensProperty | HyphensProperty[];
  msImeAlign?: MsImeAlignProperty | MsImeAlignProperty[];
  msLineBreak?: LineBreakProperty | LineBreakProperty[];
  msOrder?: GlobalsNumber | GlobalsNumber[];
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  msOverflowX?: OverflowXProperty | OverflowXProperty[];
  msOverflowY?: OverflowYProperty | OverflowYProperty[];
  msScrollChaining?: MsScrollChainingProperty | MsScrollChainingProperty[];
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[];
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[];
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[];
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[];
  msScrollRails?: MsScrollRailsProperty | MsScrollRailsProperty[];
  msScrollSnapPointsX?: GlobalsString | GlobalsString[];
  msScrollSnapPointsY?: GlobalsString | GlobalsString[];
  msScrollSnapType?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  msScrollTranslation?: MsScrollTranslationProperty | MsScrollTranslationProperty[];
  msTextAutospace?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  msTextCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[];
  msTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  msTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  msTouchAction?: TouchActionProperty | TouchActionProperty[];
  msTouchSelect?: MsTouchSelectProperty | MsTouchSelectProperty[];
  msTransform?: TransformProperty | TransformProperty[];
  msTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  msUserSelect?: MsUserSelectProperty | MsUserSelectProperty[];
  msWordBreak?: WordBreakProperty | WordBreakProperty[];
  msWrapFlow?: MsWrapFlowProperty | MsWrapFlowProperty[];
  msWrapMargin?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[];
  msWrapThrough?: MsWrapThroughProperty | MsWrapThroughProperty[];
  msWritingMode?: WritingModeProperty | WritingModeProperty[];
  OObjectFit?: ObjectFitProperty | ObjectFitProperty[];
  OObjectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  OTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  OTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  OTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  WebkitAlignContent?: AlignContentProperty | AlignContentProperty[];
  WebkitAlignItems?: AlignItemsProperty | AlignItemsProperty[];
  WebkitAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
  WebkitAnimationDelay?: GlobalsString | GlobalsString[];
  WebkitAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  WebkitAnimationDuration?: GlobalsString | GlobalsString[];
  WebkitAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  WebkitAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  WebkitAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  WebkitAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  WebkitAppearance?: WebkitAppearanceProperty | WebkitAppearanceProperty[];
  WebkitBackdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  WebkitBackgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  WebkitBackgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  WebkitBorderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  WebkitBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  WebkitBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  WebkitClipPath?: ClipPathProperty | ClipPathProperty[];
  WebkitColorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  WebkitColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  WebkitColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  WebkitColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  WebkitColumnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  WebkitColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  WebkitFilter?: FilterProperty | FilterProperty[];
  WebkitFlexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  WebkitFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  WebkitFlexGrow?: GlobalsNumber | GlobalsNumber[];
  WebkitFlexShrink?: GlobalsNumber | GlobalsNumber[];
  WebkitFlexWrap?: FlexWrapProperty | FlexWrapProperty[];
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  WebkitFontKerning?: FontKerningProperty | FontKerningProperty[];
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  WebkitHyphens?: HyphensProperty | HyphensProperty[];
  WebkitJustifyContent?: JustifyContentProperty | JustifyContentProperty[];
  WebkitLineBreak?: LineBreakProperty | LineBreakProperty[];
  WebkitMarginEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  WebkitMarginStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  WebkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  WebkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  WebkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  WebkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  WebkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  WebkitMaskSize?: WebkitMaskSizeProperty<TLength> | WebkitMaskSizeProperty<TLength>[];
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  WebkitOrder?: GlobalsNumber | GlobalsNumber[];
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  WebkitPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  WebkitScrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  WebkitShapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  WebkitTextCombine?: TextCombineUprightProperty | TextCombineUprightProperty[];
  WebkitTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  WebkitTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  WebkitTextDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  WebkitTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  WebkitTextEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  WebkitTextEmphasisPosition?: GlobalsString | GlobalsString[];
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  WebkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  WebkitTextOrientation?: TextOrientationProperty | TextOrientationProperty[];
  WebkitTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  WebkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
  WebkitTransform?: TransformProperty | TransformProperty[];
  WebkitTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  WebkitTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  WebkitTransitionDelay?: GlobalsString | GlobalsString[];
  WebkitTransitionDuration?: GlobalsString | GlobalsString[];
  WebkitTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  WebkitUserModify?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  WebkitUserSelect?: UserSelectProperty | UserSelectProperty[];
  WebkitWritingMode?: WritingModeProperty | WritingModeProperty[];
}
export interface VendorShorthandPropertiesFallback<TLength = string | 0> {
  MozAnimation?: AnimationProperty | AnimationProperty[];
  MozBorderImage?: BorderImageProperty | BorderImageProperty[];
  MozColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  MozColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  MozTransition?: TransitionProperty | TransitionProperty[];
  msContentZoomLimit?: GlobalsString | GlobalsString[];
  msContentZoomSnap?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[];
  msFlex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  msScrollLimit?: GlobalsString | GlobalsString[];
  msScrollSnapX?: GlobalsString | GlobalsString[];
  msScrollSnapY?: GlobalsString | GlobalsString[];
  OBorderImage?: BorderImageProperty | BorderImageProperty[];
  WebkitAnimation?: AnimationProperty | AnimationProperty[];
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[];
  WebkitBorderImage?: BorderImageProperty | BorderImageProperty[];
  WebkitBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  WebkitColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  WebkitColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  WebkitFlex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  WebkitFlexFlow?: FlexFlowProperty | FlexFlowProperty[];
  WebkitLineClamp?: WebkitLineClampProperty | WebkitLineClampProperty[];
  WebkitMask?: WebkitMaskProperty<TLength> | WebkitMaskProperty<TLength>[];
  WebkitTextEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  WebkitTransition?: TransitionProperty | TransitionProperty[];
}
export interface VendorPropertiesFallback<TLength = string | 0> extends VendorLonghandPropertiesFallback<TLength>, VendorShorthandPropertiesFallback<TLength> {
}
export interface ObsoletePropertiesFallback<TLength = string | 0> {
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  boxFlex?: GlobalsNumber | GlobalsNumber[];
  boxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  boxPack?: BoxPackProperty | BoxPackProperty[];
  clip?: ClipProperty | ClipProperty[];
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  imeMode?: ImeModeProperty | ImeModeProperty[];
  offsetBlockEnd?: InsetBlockEndProperty<TLength> | InsetBlockEndProperty<TLength>[];
  offsetBlockStart?: InsetBlockStartProperty<TLength> | InsetBlockStartProperty<TLength>[];
  offsetInlineEnd?: InsetInlineEndProperty<TLength> | InsetInlineEndProperty<TLength>[];
  offsetInlineStart?: InsetInlineStartProperty<TLength> | InsetInlineStartProperty<TLength>[];
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  textCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[];
  KhtmlBoxAlign?: BoxAlignProperty | BoxAlignProperty[];
  KhtmlBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  KhtmlBoxFlex?: GlobalsNumber | GlobalsNumber[];
  KhtmlBoxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  KhtmlBoxLines?: BoxLinesProperty | BoxLinesProperty[];
  KhtmlBoxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  KhtmlBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  KhtmlBoxPack?: BoxPackProperty | BoxPackProperty[];
  MozBackgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  MozBackgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  MozBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  MozBinding?: MozBindingProperty | MozBindingProperty[];
  MozBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  MozBoxAlign?: BoxAlignProperty | BoxAlignProperty[];
  MozBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  MozBoxFlex?: GlobalsNumber | GlobalsNumber[];
  MozBoxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  MozBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  MozBoxPack?: BoxPackProperty | BoxPackProperty[];
  MozBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  MozOpacity?: GlobalsNumber | GlobalsNumber[];
  MozOutline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  MozOutlineColor?: OutlineColorProperty | OutlineColorProperty[];
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength> | MozOutlineRadiusProperty<TLength>[];
  MozOutlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  MozOutlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  MozResize?: ResizeProperty | ResizeProperty[];
  MozTextAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  MozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  MozTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  MozTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  MozTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  MozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  msImeMode?: ImeModeProperty | ImeModeProperty[];
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
  OAnimation?: AnimationProperty | AnimationProperty[];
  OAnimationDelay?: GlobalsString | GlobalsString[];
  OAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  OAnimationDuration?: GlobalsString | GlobalsString[];
  OAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  OAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  OAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  OAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  OAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  OBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  OTransform?: TransformProperty | TransformProperty[];
  OTransition?: TransitionProperty | TransitionProperty[];
  OTransitionDelay?: GlobalsString | GlobalsString[];
  OTransitionDuration?: GlobalsString | GlobalsString[];
  OTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  OTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  WebkitBoxAlign?: BoxAlignProperty | BoxAlignProperty[];
  WebkitBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  WebkitBoxFlex?: GlobalsNumber | GlobalsNumber[];
  WebkitBoxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  WebkitBoxLines?: BoxLinesProperty | BoxLinesProperty[];
  WebkitBoxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  WebkitBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  WebkitBoxPack?: BoxPackProperty | BoxPackProperty[];
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
}
export interface SvgPropertiesFallback<TLength = string | 0> {
  alignmentBaseline?: AlignmentBaselineProperty | AlignmentBaselineProperty[];
  baselineShift?: BaselineShiftProperty<TLength> | BaselineShiftProperty<TLength>[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  clipRule?: ClipRuleProperty | ClipRuleProperty[];
  color?: ColorProperty | ColorProperty[];
  colorInterpolation?: ColorInterpolationProperty | ColorInterpolationProperty[];
  colorRendering?: ColorRenderingProperty | ColorRenderingProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  dominantBaseline?: DominantBaselineProperty | DominantBaselineProperty[];
  fill?: FillProperty | FillProperty[];
  fillOpacity?: GlobalsNumber | GlobalsNumber[];
  fillRule?: FillRuleProperty | FillRuleProperty[];
  filter?: FilterProperty | FilterProperty[];
  floodColor?: FloodColorProperty | FloodColorProperty[];
  floodOpacity?: GlobalsNumber | GlobalsNumber[];
  font?: FontProperty | FontProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  glyphOrientationVertical?: GlyphOrientationVerticalProperty | GlyphOrientationVerticalProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lightingColor?: LightingColorProperty | LightingColorProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  marker?: MarkerProperty | MarkerProperty[];
  markerEnd?: MarkerEndProperty | MarkerEndProperty[];
  markerMid?: MarkerMidProperty | MarkerMidProperty[];
  markerStart?: MarkerStartProperty | MarkerStartProperty[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  overflow?: OverflowProperty | OverflowProperty[];
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  shapeRendering?: ShapeRenderingProperty | ShapeRenderingProperty[];
  stopColor?: StopColorProperty | StopColorProperty[];
  stopOpacity?: GlobalsNumber | GlobalsNumber[];
  stroke?: StrokeProperty | StrokeProperty[];
  strokeDasharray?: StrokeDasharrayProperty<TLength> | StrokeDasharrayProperty<TLength>[];
  strokeDashoffset?: StrokeDashoffsetProperty<TLength> | StrokeDashoffsetProperty<TLength>[];
  strokeLinecap?: StrokeLinecapProperty | StrokeLinecapProperty[];
  strokeLinejoin?: StrokeLinejoinProperty | StrokeLinejoinProperty[];
  strokeMiterlimit?: GlobalsNumber | GlobalsNumber[];
  strokeOpacity?: GlobalsNumber | GlobalsNumber[];
  strokeWidth?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[];
  textAnchor?: TextAnchorProperty | TextAnchorProperty[];
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  vectorEffect?: VectorEffectProperty | VectorEffectProperty[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
}
export interface PropertiesFallback<TLength = string | 0> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength>, ObsoletePropertiesFallback<TLength>, SvgPropertiesFallback<TLength> {
}
export interface StandardLonghandPropertiesHyphenFallback<TLength = string | 0> {
  'align-content'?: AlignContentProperty | AlignContentProperty[];
  'align-items'?: AlignItemsProperty | AlignItemsProperty[];
  'align-self'?: AlignSelfProperty | AlignSelfProperty[];
  'animation-delay'?: GlobalsString | GlobalsString[];
  'animation-direction'?: AnimationDirectionProperty | AnimationDirectionProperty[];
  'animation-duration'?: GlobalsString | GlobalsString[];
  'animation-fill-mode'?: AnimationFillModeProperty | AnimationFillModeProperty[];
  'animation-iteration-count'?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  'animation-name'?: AnimationNameProperty | AnimationNameProperty[];
  'animation-play-state'?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  'animation-timing-function'?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  'backdrop-filter'?: BackdropFilterProperty | BackdropFilterProperty[];
  'backface-visibility'?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  'background-attachment'?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  'background-blend-mode'?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  'background-clip'?: BackgroundClipProperty | BackgroundClipProperty[];
  'background-color'?: BackgroundColorProperty | BackgroundColorProperty[];
  'background-image'?: BackgroundImageProperty | BackgroundImageProperty[];
  'background-origin'?: BackgroundOriginProperty | BackgroundOriginProperty[];
  'background-position'?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  'background-position-x'?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  'background-position-y'?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  'background-repeat'?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  'background-size'?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  'block-overflow'?: BlockOverflowProperty | BlockOverflowProperty[];
  'block-size'?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  'border-block-end-color'?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  'border-block-end-style'?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  'border-block-end-width'?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  'border-block-start-color'?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  'border-block-start-style'?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  'border-block-start-width'?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  'border-bottom-color'?: BorderBottomColorProperty | BorderBottomColorProperty[];
  'border-bottom-left-radius'?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  'border-bottom-right-radius'?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  'border-bottom-style'?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  'border-bottom-width'?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  'border-collapse'?: BorderCollapseProperty | BorderCollapseProperty[];
  'border-image-outset'?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  'border-image-repeat'?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  'border-image-slice'?: BorderImageSliceProperty | BorderImageSliceProperty[];
  'border-image-source'?: BorderImageSourceProperty | BorderImageSourceProperty[];
  'border-image-width'?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  'border-inline-end-color'?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  'border-inline-end-style'?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  'border-inline-end-width'?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  'border-inline-start-color'?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  'border-inline-start-style'?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  'border-inline-start-width'?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  'border-left-color'?: BorderLeftColorProperty | BorderLeftColorProperty[];
  'border-left-style'?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  'border-left-width'?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  'border-right-color'?: BorderRightColorProperty | BorderRightColorProperty[];
  'border-right-style'?: BorderRightStyleProperty | BorderRightStyleProperty[];
  'border-right-width'?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  'border-spacing'?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  'border-top-color'?: BorderTopColorProperty | BorderTopColorProperty[];
  'border-top-left-radius'?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  'border-top-right-radius'?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  'border-top-style'?: BorderTopStyleProperty | BorderTopStyleProperty[];
  'border-top-width'?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  'box-decoration-break'?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  'box-shadow'?: BoxShadowProperty | BoxShadowProperty[];
  'box-sizing'?: BoxSizingProperty | BoxSizingProperty[];
  'break-after'?: BreakAfterProperty | BreakAfterProperty[];
  'break-before'?: BreakBeforeProperty | BreakBeforeProperty[];
  'break-inside'?: BreakInsideProperty | BreakInsideProperty[];
  'caption-side'?: CaptionSideProperty | CaptionSideProperty[];
  'caret-color'?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  'clip-path'?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  'color-adjust'?: ColorAdjustProperty | ColorAdjustProperty[];
  'column-count'?: ColumnCountProperty | ColumnCountProperty[];
  'column-fill'?: ColumnFillProperty | ColumnFillProperty[];
  'column-gap'?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  'column-rule-color'?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  'column-rule-style'?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  'column-rule-width'?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  'column-span'?: ColumnSpanProperty | ColumnSpanProperty[];
  'column-width'?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  'counter-increment'?: CounterIncrementProperty | CounterIncrementProperty[];
  'counter-reset'?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  'empty-cells'?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  'flex-basis'?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  'flex-direction'?: FlexDirectionProperty | FlexDirectionProperty[];
  'flex-grow'?: GlobalsNumber | GlobalsNumber[];
  'flex-shrink'?: GlobalsNumber | GlobalsNumber[];
  'flex-wrap'?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  'font-family'?: FontFamilyProperty | FontFamilyProperty[];
  'font-feature-settings'?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  'font-kerning'?: FontKerningProperty | FontKerningProperty[];
  'font-language-override'?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  'font-optical-sizing'?: FontOpticalSizingProperty | FontOpticalSizingProperty[];
  'font-size'?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  'font-size-adjust'?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  'font-stretch'?: FontStretchProperty | FontStretchProperty[];
  'font-style'?: FontStyleProperty | FontStyleProperty[];
  'font-synthesis'?: FontSynthesisProperty | FontSynthesisProperty[];
  'font-variant'?: FontVariantProperty | FontVariantProperty[];
  'font-variant-caps'?: FontVariantCapsProperty | FontVariantCapsProperty[];
  'font-variant-east-asian'?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  'font-variant-ligatures'?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  'font-variant-numeric'?: FontVariantNumericProperty | FontVariantNumericProperty[];
  'font-variant-position'?: FontVariantPositionProperty | FontVariantPositionProperty[];
  'font-variation-settings'?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  'font-weight'?: FontWeightProperty | FontWeightProperty[];
  'grid-auto-columns'?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  'grid-auto-flow'?: GridAutoFlowProperty | GridAutoFlowProperty[];
  'grid-auto-rows'?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  'grid-column-end'?: GridColumnEndProperty | GridColumnEndProperty[];
  'grid-column-start'?: GridColumnStartProperty | GridColumnStartProperty[];
  'grid-row-end'?: GridRowEndProperty | GridRowEndProperty[];
  'grid-row-start'?: GridRowStartProperty | GridRowStartProperty[];
  'grid-template-areas'?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  'grid-template-columns'?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  'grid-template-rows'?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  'hanging-punctuation'?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  hyphens?: HyphensProperty | HyphensProperty[];
  'image-orientation'?: ImageOrientationProperty | ImageOrientationProperty[];
  'image-rendering'?: ImageRenderingProperty | ImageRenderingProperty[];
  'image-resolution'?: ImageResolutionProperty | ImageResolutionProperty[];
  'initial-letter'?: InitialLetterProperty | InitialLetterProperty[];
  'inline-size'?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  'inset-block-end'?: InsetBlockEndProperty<TLength> | InsetBlockEndProperty<TLength>[];
  'inset-block-start'?: InsetBlockStartProperty<TLength> | InsetBlockStartProperty<TLength>[];
  'inset-inline-end'?: InsetInlineEndProperty<TLength> | InsetInlineEndProperty<TLength>[];
  'inset-inline-start'?: InsetInlineStartProperty<TLength> | InsetInlineStartProperty<TLength>[];
  isolation?: IsolationProperty | IsolationProperty[];
  'justify-content'?: JustifyContentProperty | JustifyContentProperty[];
  'justify-items'?: JustifyItemsProperty | JustifyItemsProperty[];
  'justify-self'?: JustifySelfProperty | JustifySelfProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  'letter-spacing'?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  'line-break'?: LineBreakProperty | LineBreakProperty[];
  'line-height'?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  'list-style-image'?: ListStyleImageProperty | ListStyleImageProperty[];
  'list-style-position'?: ListStylePositionProperty | ListStylePositionProperty[];
  'list-style-type'?: ListStyleTypeProperty | ListStyleTypeProperty[];
  'margin-block-end'?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  'margin-block-start'?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  'margin-bottom'?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  'margin-inline-end'?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  'margin-inline-start'?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  'margin-left'?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  'margin-right'?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  'margin-top'?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  'mask-border-mode'?: MaskBorderModeProperty | MaskBorderModeProperty[];
  'mask-border-outset'?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  'mask-border-repeat'?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  'mask-border-slice'?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  'mask-border-source'?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  'mask-border-width'?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  'mask-clip'?: MaskClipProperty | MaskClipProperty[];
  'mask-composite'?: MaskCompositeProperty | MaskCompositeProperty[];
  'mask-image'?: MaskImageProperty | MaskImageProperty[];
  'mask-mode'?: MaskModeProperty | MaskModeProperty[];
  'mask-origin'?: MaskOriginProperty | MaskOriginProperty[];
  'mask-position'?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  'mask-repeat'?: MaskRepeatProperty | MaskRepeatProperty[];
  'mask-size'?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  'mask-type'?: MaskTypeProperty | MaskTypeProperty[];
  'max-block-size'?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  'max-height'?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  'max-inline-size'?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  'max-lines'?: MaxLinesProperty | MaxLinesProperty[];
  'max-width'?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  'min-block-size'?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  'min-height'?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  'min-inline-size'?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  'min-width'?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  'mix-blend-mode'?: MixBlendModeProperty | MixBlendModeProperty[];
  'motion-offset'?: GlobalsString | GlobalsString[];
  'motion-path'?: MotionPathProperty | MotionPathProperty[];
  'motion-rotation'?: GlobalsString | GlobalsString[];
  'object-fit'?: ObjectFitProperty | ObjectFitProperty[];
  'object-position'?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  'offset-position'?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  order?: GlobalsNumber | GlobalsNumber[];
  orphans?: GlobalsNumber | GlobalsNumber[];
  'outline-color'?: OutlineColorProperty | OutlineColorProperty[];
  'outline-offset'?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  'outline-style'?: OutlineStyleProperty | OutlineStyleProperty[];
  'outline-width'?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  'overflow-anchor'?: OverflowAnchorProperty | OverflowAnchorProperty[];
  'overflow-block'?: OverflowBlockProperty | OverflowBlockProperty[];
  'overflow-clip-box'?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  'overflow-inline'?: OverflowInlineProperty | OverflowInlineProperty[];
  'overflow-wrap'?: OverflowWrapProperty | OverflowWrapProperty[];
  'overflow-x'?: OverflowXProperty | OverflowXProperty[];
  'overflow-y'?: OverflowYProperty | OverflowYProperty[];
  'overscroll-behavior'?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  'overscroll-behavior-x'?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  'overscroll-behavior-y'?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  'padding-block-end'?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  'padding-block-start'?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  'padding-bottom'?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  'padding-inline-end'?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  'padding-inline-start'?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  'padding-left'?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  'padding-right'?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  'padding-top'?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  'page-break-after'?: PageBreakAfterProperty | PageBreakAfterProperty[];
  'page-break-before'?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  'page-break-inside'?: PageBreakInsideProperty | PageBreakInsideProperty[];
  'paint-order'?: PaintOrderProperty | PaintOrderProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  'perspective-origin'?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  'place-content'?: PlaceContentProperty | PlaceContentProperty[];
  'pointer-events'?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rotate?: RotateProperty | RotateProperty[];
  'row-gap'?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  'ruby-align'?: RubyAlignProperty | RubyAlignProperty[];
  'ruby-merge'?: RubyMergeProperty | RubyMergeProperty[];
  'ruby-position'?: RubyPositionProperty | RubyPositionProperty[];
  scale?: ScaleProperty | ScaleProperty[];
  'scroll-behavior'?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  'scroll-margin'?: ScrollMarginProperty<TLength> | ScrollMarginProperty<TLength>[];
  'scroll-margin-block'?: ScrollMarginBlockProperty<TLength> | ScrollMarginBlockProperty<TLength>[];
  'scroll-margin-block-end'?: ScrollMarginBlockEndProperty<TLength> | ScrollMarginBlockEndProperty<TLength>[];
  'scroll-margin-block-start'?: ScrollMarginBlockStartProperty<TLength> | ScrollMarginBlockStartProperty<TLength>[];
  'scroll-margin-bottom'?: ScrollMarginBottomProperty<TLength> | ScrollMarginBottomProperty<TLength>[];
  'scroll-margin-inline-end'?: ScrollMarginInlineEndProperty<TLength> | ScrollMarginInlineEndProperty<TLength>[];
  'scroll-margin-inline-start'?: ScrollMarginInlineStartProperty<TLength> | ScrollMarginInlineStartProperty<TLength>[];
  'scroll-margin-left'?: ScrollMarginLeftProperty<TLength> | ScrollMarginLeftProperty<TLength>[];
  'scroll-margin-right'?: ScrollMarginRightProperty<TLength> | ScrollMarginRightProperty<TLength>[];
  'scroll-margin-top'?: ScrollMarginTopProperty<TLength> | ScrollMarginTopProperty<TLength>[];
  'scroll-padding'?: ScrollPaddingProperty<TLength> | ScrollPaddingProperty<TLength>[];
  'scroll-padding-block'?: ScrollPaddingBlockProperty<TLength> | ScrollPaddingBlockProperty<TLength>[];
  'scroll-padding-block-end'?: ScrollPaddingBlockEndProperty<TLength> | ScrollPaddingBlockEndProperty<TLength>[];
  'scroll-padding-block-start'?: ScrollPaddingBlockStartProperty<TLength> | ScrollPaddingBlockStartProperty<TLength>[];
  'scroll-padding-bottom'?: ScrollPaddingBottomProperty<TLength> | ScrollPaddingBottomProperty<TLength>[];
  'scroll-padding-inline'?: ScrollPaddingInlineProperty<TLength> | ScrollPaddingInlineProperty<TLength>[];
  'scroll-padding-inline-end'?: ScrollPaddingInlineEndProperty<TLength> | ScrollPaddingInlineEndProperty<TLength>[];
  'scroll-padding-inline-start'?: ScrollPaddingInlineStartProperty<TLength> | ScrollPaddingInlineStartProperty<TLength>[];
  'scroll-padding-left'?: ScrollPaddingLeftProperty<TLength> | ScrollPaddingLeftProperty<TLength>[];
  'scroll-padding-right'?: ScrollPaddingRightProperty<TLength> | ScrollPaddingRightProperty<TLength>[];
  'scroll-padding-top'?: ScrollPaddingTopProperty<TLength> | ScrollPaddingTopProperty<TLength>[];
  'scroll-snap-align'?: ScrollSnapAlignProperty | ScrollSnapAlignProperty[];
  'scroll-snap-stop'?: ScrollSnapStopProperty | ScrollSnapStopProperty[];
  'scroll-snap-type'?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  'scrollbar-color'?: ScrollbarColorProperty | ScrollbarColorProperty[];
  'scrollbar-width'?: ScrollbarWidthProperty<TLength> | ScrollbarWidthProperty<TLength>[];
  'shape-image-threshold'?: GlobalsNumber | GlobalsNumber[];
  'shape-margin'?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  'shape-outside'?: ShapeOutsideProperty | ShapeOutsideProperty[];
  'tab-size'?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  'table-layout'?: TableLayoutProperty | TableLayoutProperty[];
  'text-align'?: TextAlignProperty | TextAlignProperty[];
  'text-align-last'?: TextAlignLastProperty | TextAlignLastProperty[];
  'text-combine-upright'?: TextCombineUprightProperty | TextCombineUprightProperty[];
  'text-decoration-color'?: TextDecorationColorProperty | TextDecorationColorProperty[];
  'text-decoration-line'?: TextDecorationLineProperty | TextDecorationLineProperty[];
  'text-decoration-skip'?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  'text-decoration-skip-ink'?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  'text-decoration-style'?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  'text-emphasis-color'?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  'text-emphasis-position'?: GlobalsString | GlobalsString[];
  'text-emphasis-style'?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  'text-indent'?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  'text-justify'?: TextJustifyProperty | TextJustifyProperty[];
  'text-orientation'?: TextOrientationProperty | TextOrientationProperty[];
  'text-overflow'?: TextOverflowProperty | TextOverflowProperty[];
  'text-rendering'?: TextRenderingProperty | TextRenderingProperty[];
  'text-shadow'?: TextShadowProperty | TextShadowProperty[];
  'text-size-adjust'?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  'text-transform'?: TextTransformProperty | TextTransformProperty[];
  'text-underline-position'?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  'touch-action'?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  'transform-box'?: TransformBoxProperty | TransformBoxProperty[];
  'transform-origin'?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  'transform-style'?: TransformStyleProperty | TransformStyleProperty[];
  'transition-delay'?: GlobalsString | GlobalsString[];
  'transition-duration'?: GlobalsString | GlobalsString[];
  'transition-property'?: TransitionPropertyProperty | TransitionPropertyProperty[];
  'transition-timing-function'?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  'unicode-bidi'?: UnicodeBidiProperty | UnicodeBidiProperty[];
  'user-select'?: UserSelectProperty | UserSelectProperty[];
  'vertical-align'?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  'white-space'?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: GlobalsNumber | GlobalsNumber[];
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  'will-change'?: WillChangeProperty | WillChangeProperty[];
  'word-break'?: WordBreakProperty | WordBreakProperty[];
  'word-spacing'?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  'word-wrap'?: WordWrapProperty | WordWrapProperty[];
  'writing-mode'?: WritingModeProperty | WritingModeProperty[];
  'z-index'?: ZIndexProperty | ZIndexProperty[];
  zoom?: ZoomProperty | ZoomProperty[];
}
export interface StandardShorthandPropertiesHyphenFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  animation?: AnimationProperty | AnimationProperty[];
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  'border-block-end'?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  'border-block-start'?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  'border-bottom'?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  'border-color'?: BorderColorProperty | BorderColorProperty[];
  'border-image'?: BorderImageProperty | BorderImageProperty[];
  'border-inline-end'?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  'border-inline-start'?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  'border-left'?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  'border-radius'?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  'border-right'?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  'border-style'?: BorderStyleProperty | BorderStyleProperty[];
  'border-top'?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  'border-width'?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  'column-rule'?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  'flex-flow'?: FlexFlowProperty | FlexFlowProperty[];
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  grid?: GridProperty | GridProperty[];
  'grid-area'?: GridAreaProperty | GridAreaProperty[];
  'grid-column'?: GridColumnProperty | GridColumnProperty[];
  'grid-row'?: GridRowProperty | GridRowProperty[];
  'grid-template'?: GridTemplateProperty | GridTemplateProperty[];
  'line-clamp'?: LineClampProperty | LineClampProperty[];
  'list-style'?: ListStyleProperty | ListStyleProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  'mask-border'?: MaskBorderProperty | MaskBorderProperty[];
  motion?: GlobalsString | GlobalsString[];
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  'place-items'?: PlaceItemsProperty | PlaceItemsProperty[];
  'text-decoration'?: TextDecorationProperty | TextDecorationProperty[];
  'text-emphasis'?: TextEmphasisProperty | TextEmphasisProperty[];
  transition?: TransitionProperty | TransitionProperty[];
}
export interface StandardPropertiesHyphenFallback<TLength = string | 0> extends StandardLonghandPropertiesHyphenFallback<TLength>, StandardShorthandPropertiesHyphenFallback<TLength> {
}
export interface VendorLonghandPropertiesHyphenFallback<TLength = string | 0> {
  '-moz-animation-delay'?: GlobalsString | GlobalsString[];
  '-moz-animation-direction'?: AnimationDirectionProperty | AnimationDirectionProperty[];
  '-moz-animation-duration'?: GlobalsString | GlobalsString[];
  '-moz-animation-fill-mode'?: AnimationFillModeProperty | AnimationFillModeProperty[];
  '-moz-animation-iteration-count'?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  '-moz-animation-name'?: AnimationNameProperty | AnimationNameProperty[];
  '-moz-animation-play-state'?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  '-moz-animation-timing-function'?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  '-moz-appearance'?: MozAppearanceProperty | MozAppearanceProperty[];
  '-moz-backface-visibility'?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  '-moz-border-bottom-colors'?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  '-moz-border-end-color'?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  '-moz-border-end-style'?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  '-moz-border-end-width'?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  '-moz-border-left-colors'?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  '-moz-border-right-colors'?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  '-moz-border-start-color'?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  '-moz-border-start-style'?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  '-moz-border-top-colors'?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  '-moz-box-sizing'?: BoxSizingProperty | BoxSizingProperty[];
  '-moz-column-count'?: ColumnCountProperty | ColumnCountProperty[];
  '-moz-column-fill'?: ColumnFillProperty | ColumnFillProperty[];
  '-moz-column-gap'?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  '-moz-column-rule-color'?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  '-moz-column-rule-style'?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  '-moz-column-rule-width'?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  '-moz-column-width'?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  '-moz-context-properties'?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  '-moz-float-edge'?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  '-moz-font-feature-settings'?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  '-moz-font-language-override'?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  '-moz-force-broken-image-icon'?: GlobalsNumber | GlobalsNumber[];
  '-moz-hyphens'?: HyphensProperty | HyphensProperty[];
  '-moz-image-region'?: MozImageRegionProperty | MozImageRegionProperty[];
  '-moz-margin-end'?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  '-moz-margin-start'?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  '-moz-orient'?: MozOrientProperty | MozOrientProperty[];
  '-moz-outline-radius-bottomleft'?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[];
  '-moz-outline-radius-bottomright'?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[];
  '-moz-outline-radius-topleft'?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[];
  '-moz-outline-radius-topright'?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[];
  '-moz-padding-end'?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  '-moz-padding-start'?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  '-moz-perspective'?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  '-moz-perspective-origin'?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  '-moz-stack-sizing'?: MozStackSizingProperty | MozStackSizingProperty[];
  '-moz-tab-size'?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  '-moz-text-size-adjust'?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  '-moz-transform-origin'?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  '-moz-transform-style'?: TransformStyleProperty | TransformStyleProperty[];
  '-moz-transition-delay'?: GlobalsString | GlobalsString[];
  '-moz-transition-duration'?: GlobalsString | GlobalsString[];
  '-moz-transition-property'?: TransitionPropertyProperty | TransitionPropertyProperty[];
  '-moz-transition-timing-function'?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  '-moz-user-focus'?: MozUserFocusProperty | MozUserFocusProperty[];
  '-moz-user-modify'?: MozUserModifyProperty | MozUserModifyProperty[];
  '-moz-user-select'?: UserSelectProperty | UserSelectProperty[];
  '-moz-window-dragging'?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  '-moz-window-shadow'?: MozWindowShadowProperty | MozWindowShadowProperty[];
  '-ms-accelerator'?: MsAcceleratorProperty | MsAcceleratorProperty[];
  '-ms-align-self'?: AlignSelfProperty | AlignSelfProperty[];
  '-ms-block-progression'?: MsBlockProgressionProperty | MsBlockProgressionProperty[];
  '-ms-content-zoom-chaining'?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[];
  '-ms-content-zoom-limit-max'?: GlobalsString | GlobalsString[];
  '-ms-content-zoom-limit-min'?: GlobalsString | GlobalsString[];
  '-ms-content-zoom-snap-points'?: GlobalsString | GlobalsString[];
  '-ms-content-zoom-snap-type'?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[];
  '-ms-content-zooming'?: MsContentZoomingProperty | MsContentZoomingProperty[];
  '-ms-filter'?: GlobalsString | GlobalsString[];
  '-ms-flex-direction'?: FlexDirectionProperty | FlexDirectionProperty[];
  '-ms-flex-positive'?: GlobalsNumber | GlobalsNumber[];
  '-ms-flow-from'?: MsFlowFromProperty | MsFlowFromProperty[];
  '-ms-flow-into'?: MsFlowIntoProperty | MsFlowIntoProperty[];
  '-ms-grid-columns'?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  '-ms-grid-rows'?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  '-ms-high-contrast-adjust'?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[];
  '-ms-hyphenate-limit-chars'?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[];
  '-ms-hyphenate-limit-lines'?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[];
  '-ms-hyphenate-limit-zone'?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[];
  '-ms-hyphens'?: HyphensProperty | HyphensProperty[];
  '-ms-ime-align'?: MsImeAlignProperty | MsImeAlignProperty[];
  '-ms-line-break'?: LineBreakProperty | LineBreakProperty[];
  '-ms-order'?: GlobalsNumber | GlobalsNumber[];
  '-ms-overflow-style'?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  '-ms-overflow-x'?: OverflowXProperty | OverflowXProperty[];
  '-ms-overflow-y'?: OverflowYProperty | OverflowYProperty[];
  '-ms-scroll-chaining'?: MsScrollChainingProperty | MsScrollChainingProperty[];
  '-ms-scroll-limit-x-max'?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[];
  '-ms-scroll-limit-x-min'?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[];
  '-ms-scroll-limit-y-max'?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[];
  '-ms-scroll-limit-y-min'?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[];
  '-ms-scroll-rails'?: MsScrollRailsProperty | MsScrollRailsProperty[];
  '-ms-scroll-snap-points-x'?: GlobalsString | GlobalsString[];
  '-ms-scroll-snap-points-y'?: GlobalsString | GlobalsString[];
  '-ms-scroll-snap-type'?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  '-ms-scroll-translation'?: MsScrollTranslationProperty | MsScrollTranslationProperty[];
  '-ms-text-autospace'?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  '-ms-text-combine-horizontal'?: TextCombineUprightProperty | TextCombineUprightProperty[];
  '-ms-text-overflow'?: TextOverflowProperty | TextOverflowProperty[];
  '-ms-text-size-adjust'?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  '-ms-touch-action'?: TouchActionProperty | TouchActionProperty[];
  '-ms-touch-select'?: MsTouchSelectProperty | MsTouchSelectProperty[];
  '-ms-transform'?: TransformProperty | TransformProperty[];
  '-ms-transform-origin'?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  '-ms-user-select'?: MsUserSelectProperty | MsUserSelectProperty[];
  '-ms-word-break'?: WordBreakProperty | WordBreakProperty[];
  '-ms-wrap-flow'?: MsWrapFlowProperty | MsWrapFlowProperty[];
  '-ms-wrap-margin'?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[];
  '-ms-wrap-through'?: MsWrapThroughProperty | MsWrapThroughProperty[];
  '-ms-writing-mode'?: WritingModeProperty | WritingModeProperty[];
  '-o-object-fit'?: ObjectFitProperty | ObjectFitProperty[];
  '-o-object-position'?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  '-o-tab-size'?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  '-o-text-overflow'?: TextOverflowProperty | TextOverflowProperty[];
  '-o-transform-origin'?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  '-webkit-align-content'?: AlignContentProperty | AlignContentProperty[];
  '-webkit-align-items'?: AlignItemsProperty | AlignItemsProperty[];
  '-webkit-align-self'?: AlignSelfProperty | AlignSelfProperty[];
  '-webkit-animation-delay'?: GlobalsString | GlobalsString[];
  '-webkit-animation-direction'?: AnimationDirectionProperty | AnimationDirectionProperty[];
  '-webkit-animation-duration'?: GlobalsString | GlobalsString[];
  '-webkit-animation-fill-mode'?: AnimationFillModeProperty | AnimationFillModeProperty[];
  '-webkit-animation-iteration-count'?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  '-webkit-animation-name'?: AnimationNameProperty | AnimationNameProperty[];
  '-webkit-animation-play-state'?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  '-webkit-animation-timing-function'?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  '-webkit-appearance'?: WebkitAppearanceProperty | WebkitAppearanceProperty[];
  '-webkit-backdrop-filter'?: BackdropFilterProperty | BackdropFilterProperty[];
  '-webkit-backface-visibility'?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  '-webkit-background-clip'?: BackgroundClipProperty | BackgroundClipProperty[];
  '-webkit-background-origin'?: BackgroundOriginProperty | BackgroundOriginProperty[];
  '-webkit-background-size'?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  '-webkit-border-before-color'?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  '-webkit-border-before-style'?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  '-webkit-border-before-width'?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  '-webkit-border-bottom-left-radius'?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  '-webkit-border-bottom-right-radius'?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  '-webkit-border-image-slice'?: BorderImageSliceProperty | BorderImageSliceProperty[];
  '-webkit-border-top-left-radius'?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  '-webkit-border-top-right-radius'?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  '-webkit-box-decoration-break'?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  '-webkit-box-reflect'?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  '-webkit-box-shadow'?: BoxShadowProperty | BoxShadowProperty[];
  '-webkit-box-sizing'?: BoxSizingProperty | BoxSizingProperty[];
  '-webkit-clip-path'?: ClipPathProperty | ClipPathProperty[];
  '-webkit-color-adjust'?: ColorAdjustProperty | ColorAdjustProperty[];
  '-webkit-column-count'?: ColumnCountProperty | ColumnCountProperty[];
  '-webkit-column-gap'?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  '-webkit-column-rule-color'?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  '-webkit-column-rule-style'?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  '-webkit-column-rule-width'?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  '-webkit-column-span'?: ColumnSpanProperty | ColumnSpanProperty[];
  '-webkit-column-width'?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  '-webkit-filter'?: FilterProperty | FilterProperty[];
  '-webkit-flex-basis'?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  '-webkit-flex-direction'?: FlexDirectionProperty | FlexDirectionProperty[];
  '-webkit-flex-grow'?: GlobalsNumber | GlobalsNumber[];
  '-webkit-flex-shrink'?: GlobalsNumber | GlobalsNumber[];
  '-webkit-flex-wrap'?: FlexWrapProperty | FlexWrapProperty[];
  '-webkit-font-feature-settings'?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  '-webkit-font-kerning'?: FontKerningProperty | FontKerningProperty[];
  '-webkit-font-variant-ligatures'?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  '-webkit-hyphens'?: HyphensProperty | HyphensProperty[];
  '-webkit-justify-content'?: JustifyContentProperty | JustifyContentProperty[];
  '-webkit-line-break'?: LineBreakProperty | LineBreakProperty[];
  '-webkit-margin-end'?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  '-webkit-margin-start'?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  '-webkit-mask-attachment'?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  '-webkit-mask-clip'?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  '-webkit-mask-composite'?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  '-webkit-mask-image'?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  '-webkit-mask-origin'?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  '-webkit-mask-position'?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  '-webkit-mask-position-x'?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  '-webkit-mask-position-y'?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  '-webkit-mask-repeat'?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  '-webkit-mask-repeat-x'?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  '-webkit-mask-repeat-y'?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  '-webkit-mask-size'?: WebkitMaskSizeProperty<TLength> | WebkitMaskSizeProperty<TLength>[];
  '-webkit-max-inline-size'?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  '-webkit-order'?: GlobalsNumber | GlobalsNumber[];
  '-webkit-overflow-scrolling'?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  '-webkit-padding-end'?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  '-webkit-padding-start'?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  '-webkit-perspective'?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  '-webkit-perspective-origin'?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  '-webkit-scroll-snap-type'?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  '-webkit-shape-margin'?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  '-webkit-tap-highlight-color'?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  '-webkit-text-combine'?: TextCombineUprightProperty | TextCombineUprightProperty[];
  '-webkit-text-decoration-color'?: TextDecorationColorProperty | TextDecorationColorProperty[];
  '-webkit-text-decoration-line'?: TextDecorationLineProperty | TextDecorationLineProperty[];
  '-webkit-text-decoration-skip'?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  '-webkit-text-decoration-style'?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  '-webkit-text-emphasis-color'?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  '-webkit-text-emphasis-position'?: GlobalsString | GlobalsString[];
  '-webkit-text-emphasis-style'?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  '-webkit-text-fill-color'?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  '-webkit-text-orientation'?: TextOrientationProperty | TextOrientationProperty[];
  '-webkit-text-size-adjust'?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  '-webkit-text-stroke-color'?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  '-webkit-text-stroke-width'?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  '-webkit-touch-callout'?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
  '-webkit-transform'?: TransformProperty | TransformProperty[];
  '-webkit-transform-origin'?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  '-webkit-transform-style'?: TransformStyleProperty | TransformStyleProperty[];
  '-webkit-transition-delay'?: GlobalsString | GlobalsString[];
  '-webkit-transition-duration'?: GlobalsString | GlobalsString[];
  '-webkit-transition-property'?: TransitionPropertyProperty | TransitionPropertyProperty[];
  '-webkit-transition-timing-function'?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  '-webkit-user-modify'?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  '-webkit-user-select'?: UserSelectProperty | UserSelectProperty[];
  '-webkit-writing-mode'?: WritingModeProperty | WritingModeProperty[];
}
export interface VendorShorthandPropertiesHyphenFallback<TLength = string | 0> {
  '-moz-animation'?: AnimationProperty | AnimationProperty[];
  '-moz-border-image'?: BorderImageProperty | BorderImageProperty[];
  '-moz-column-rule'?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  '-moz-columns'?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  '-moz-transition'?: TransitionProperty | TransitionProperty[];
  '-ms-content-zoom-limit'?: GlobalsString | GlobalsString[];
  '-ms-content-zoom-snap'?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[];
  '-ms-flex'?: FlexProperty<TLength> | FlexProperty<TLength>[];
  '-ms-scroll-limit'?: GlobalsString | GlobalsString[];
  '-ms-scroll-snap-x'?: GlobalsString | GlobalsString[];
  '-ms-scroll-snap-y'?: GlobalsString | GlobalsString[];
  '-o-border-image'?: BorderImageProperty | BorderImageProperty[];
  '-webkit-animation'?: AnimationProperty | AnimationProperty[];
  '-webkit-border-before'?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[];
  '-webkit-border-image'?: BorderImageProperty | BorderImageProperty[];
  '-webkit-border-radius'?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  '-webkit-column-rule'?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  '-webkit-columns'?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  '-webkit-flex'?: FlexProperty<TLength> | FlexProperty<TLength>[];
  '-webkit-flex-flow'?: FlexFlowProperty | FlexFlowProperty[];
  '-webkit-line-clamp'?: WebkitLineClampProperty | WebkitLineClampProperty[];
  '-webkit-mask'?: WebkitMaskProperty<TLength> | WebkitMaskProperty<TLength>[];
  '-webkit-text-emphasis'?: TextEmphasisProperty | TextEmphasisProperty[];
  '-webkit-text-stroke'?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  '-webkit-transition'?: TransitionProperty | TransitionProperty[];
}
export interface VendorPropertiesHyphenFallback<TLength = string | 0> extends VendorLonghandPropertiesHyphenFallback<TLength>, VendorShorthandPropertiesHyphenFallback<TLength> {
}
export interface ObsoletePropertiesHyphenFallback<TLength = string | 0> {
  'box-align'?: BoxAlignProperty | BoxAlignProperty[];
  'box-direction'?: BoxDirectionProperty | BoxDirectionProperty[];
  'box-flex'?: GlobalsNumber | GlobalsNumber[];
  'box-flex-group'?: GlobalsNumber | GlobalsNumber[];
  'box-lines'?: BoxLinesProperty | BoxLinesProperty[];
  'box-ordinal-group'?: GlobalsNumber | GlobalsNumber[];
  'box-orient'?: BoxOrientProperty | BoxOrientProperty[];
  'box-pack'?: BoxPackProperty | BoxPackProperty[];
  clip?: ClipProperty | ClipProperty[];
  'font-variant-alternates'?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  'grid-column-gap'?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  'grid-gap'?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  'grid-row-gap'?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  'ime-mode'?: ImeModeProperty | ImeModeProperty[];
  'offset-block-end'?: InsetBlockEndProperty<TLength> | InsetBlockEndProperty<TLength>[];
  'offset-block-start'?: InsetBlockStartProperty<TLength> | InsetBlockStartProperty<TLength>[];
  'offset-inline-end'?: InsetInlineEndProperty<TLength> | InsetInlineEndProperty<TLength>[];
  'offset-inline-start'?: InsetInlineStartProperty<TLength> | InsetInlineStartProperty<TLength>[];
  'scroll-snap-coordinate'?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  'scroll-snap-destination'?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  'scroll-snap-points-x'?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  'scroll-snap-points-y'?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  'scroll-snap-type-x'?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  'scroll-snap-type-y'?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  'text-combine-horizontal'?: TextCombineUprightProperty | TextCombineUprightProperty[];
  '-khtml-box-align'?: BoxAlignProperty | BoxAlignProperty[];
  '-khtml-box-direction'?: BoxDirectionProperty | BoxDirectionProperty[];
  '-khtml-box-flex'?: GlobalsNumber | GlobalsNumber[];
  '-khtml-box-flex-group'?: GlobalsNumber | GlobalsNumber[];
  '-khtml-box-lines'?: BoxLinesProperty | BoxLinesProperty[];
  '-khtml-box-ordinal-group'?: GlobalsNumber | GlobalsNumber[];
  '-khtml-box-orient'?: BoxOrientProperty | BoxOrientProperty[];
  '-khtml-box-pack'?: BoxPackProperty | BoxPackProperty[];
  '-moz-background-clip'?: BackgroundClipProperty | BackgroundClipProperty[];
  '-moz-background-inline-policy'?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  '-moz-background-origin'?: BackgroundOriginProperty | BackgroundOriginProperty[];
  '-moz-background-size'?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  '-moz-binding'?: MozBindingProperty | MozBindingProperty[];
  '-moz-border-radius'?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  '-moz-border-radius-bottomleft'?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  '-moz-border-radius-bottomright'?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  '-moz-border-radius-topleft'?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  '-moz-border-radius-topright'?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  '-moz-box-align'?: BoxAlignProperty | BoxAlignProperty[];
  '-moz-box-direction'?: BoxDirectionProperty | BoxDirectionProperty[];
  '-moz-box-flex'?: GlobalsNumber | GlobalsNumber[];
  '-moz-box-ordinal-group'?: GlobalsNumber | GlobalsNumber[];
  '-moz-box-orient'?: BoxOrientProperty | BoxOrientProperty[];
  '-moz-box-pack'?: BoxPackProperty | BoxPackProperty[];
  '-moz-box-shadow'?: BoxShadowProperty | BoxShadowProperty[];
  '-moz-opacity'?: GlobalsNumber | GlobalsNumber[];
  '-moz-outline'?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  '-moz-outline-color'?: OutlineColorProperty | OutlineColorProperty[];
  '-moz-outline-radius'?: MozOutlineRadiusProperty<TLength> | MozOutlineRadiusProperty<TLength>[];
  '-moz-outline-style'?: OutlineStyleProperty | OutlineStyleProperty[];
  '-moz-outline-width'?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  '-moz-resize'?: ResizeProperty | ResizeProperty[];
  '-moz-text-align-last'?: TextAlignLastProperty | TextAlignLastProperty[];
  '-moz-text-blink'?: MozTextBlinkProperty | MozTextBlinkProperty[];
  '-moz-text-decoration-color'?: TextDecorationColorProperty | TextDecorationColorProperty[];
  '-moz-text-decoration-line'?: TextDecorationLineProperty | TextDecorationLineProperty[];
  '-moz-text-decoration-style'?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  '-moz-user-input'?: MozUserInputProperty | MozUserInputProperty[];
  '-ms-ime-mode'?: ImeModeProperty | ImeModeProperty[];
  '-ms-scrollbar-3dlight-color'?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  '-ms-scrollbar-arrow-color'?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  '-ms-scrollbar-base-color'?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  '-ms-scrollbar-darkshadow-color'?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  '-ms-scrollbar-face-color'?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  '-ms-scrollbar-highlight-color'?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  '-ms-scrollbar-shadow-color'?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  '-ms-scrollbar-track-color'?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
  '-o-animation'?: AnimationProperty | AnimationProperty[];
  '-o-animation-delay'?: GlobalsString | GlobalsString[];
  '-o-animation-direction'?: AnimationDirectionProperty | AnimationDirectionProperty[];
  '-o-animation-duration'?: GlobalsString | GlobalsString[];
  '-o-animation-fill-mode'?: AnimationFillModeProperty | AnimationFillModeProperty[];
  '-o-animation-iteration-count'?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  '-o-animation-name'?: AnimationNameProperty | AnimationNameProperty[];
  '-o-animation-play-state'?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  '-o-animation-timing-function'?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  '-o-background-size'?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  '-o-transform'?: TransformProperty | TransformProperty[];
  '-o-transition'?: TransitionProperty | TransitionProperty[];
  '-o-transition-delay'?: GlobalsString | GlobalsString[];
  '-o-transition-duration'?: GlobalsString | GlobalsString[];
  '-o-transition-property'?: TransitionPropertyProperty | TransitionPropertyProperty[];
  '-o-transition-timing-function'?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  '-webkit-box-align'?: BoxAlignProperty | BoxAlignProperty[];
  '-webkit-box-direction'?: BoxDirectionProperty | BoxDirectionProperty[];
  '-webkit-box-flex'?: GlobalsNumber | GlobalsNumber[];
  '-webkit-box-flex-group'?: GlobalsNumber | GlobalsNumber[];
  '-webkit-box-lines'?: BoxLinesProperty | BoxLinesProperty[];
  '-webkit-box-ordinal-group'?: GlobalsNumber | GlobalsNumber[];
  '-webkit-box-orient'?: BoxOrientProperty | BoxOrientProperty[];
  '-webkit-box-pack'?: BoxPackProperty | BoxPackProperty[];
  '-webkit-scroll-snap-points-x'?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  '-webkit-scroll-snap-points-y'?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
}
export interface SvgPropertiesHyphenFallback<TLength = string | 0> {
  'alignment-baseline'?: AlignmentBaselineProperty | AlignmentBaselineProperty[];
  'baseline-shift'?: BaselineShiftProperty<TLength> | BaselineShiftProperty<TLength>[];
  clip?: ClipProperty | ClipProperty[];
  'clip-path'?: ClipPathProperty | ClipPathProperty[];
  'clip-rule'?: ClipRuleProperty | ClipRuleProperty[];
  color?: ColorProperty | ColorProperty[];
  'color-interpolation'?: ColorInterpolationProperty | ColorInterpolationProperty[];
  'color-rendering'?: ColorRenderingProperty | ColorRenderingProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  'dominant-baseline'?: DominantBaselineProperty | DominantBaselineProperty[];
  fill?: FillProperty | FillProperty[];
  'fill-opacity'?: GlobalsNumber | GlobalsNumber[];
  'fill-rule'?: FillRuleProperty | FillRuleProperty[];
  filter?: FilterProperty | FilterProperty[];
  'flood-color'?: FloodColorProperty | FloodColorProperty[];
  'flood-opacity'?: GlobalsNumber | GlobalsNumber[];
  font?: FontProperty | FontProperty[];
  'font-family'?: FontFamilyProperty | FontFamilyProperty[];
  'font-size'?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  'font-size-adjust'?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  'font-stretch'?: FontStretchProperty | FontStretchProperty[];
  'font-style'?: FontStyleProperty | FontStyleProperty[];
  'font-variant'?: FontVariantProperty | FontVariantProperty[];
  'font-weight'?: FontWeightProperty | FontWeightProperty[];
  'glyph-orientation-vertical'?: GlyphOrientationVerticalProperty | GlyphOrientationVerticalProperty[];
  'image-rendering'?: ImageRenderingProperty | ImageRenderingProperty[];
  'letter-spacing'?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  'lighting-color'?: LightingColorProperty | LightingColorProperty[];
  'line-height'?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  marker?: MarkerProperty | MarkerProperty[];
  'marker-end'?: MarkerEndProperty | MarkerEndProperty[];
  'marker-mid'?: MarkerMidProperty | MarkerMidProperty[];
  'marker-start'?: MarkerStartProperty | MarkerStartProperty[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  overflow?: OverflowProperty | OverflowProperty[];
  'paint-order'?: PaintOrderProperty | PaintOrderProperty[];
  'pointer-events'?: PointerEventsProperty | PointerEventsProperty[];
  'shape-rendering'?: ShapeRenderingProperty | ShapeRenderingProperty[];
  'stop-color'?: StopColorProperty | StopColorProperty[];
  'stop-opacity'?: GlobalsNumber | GlobalsNumber[];
  stroke?: StrokeProperty | StrokeProperty[];
  'stroke-dasharray'?: StrokeDasharrayProperty<TLength> | StrokeDasharrayProperty<TLength>[];
  'stroke-dashoffset'?: StrokeDashoffsetProperty<TLength> | StrokeDashoffsetProperty<TLength>[];
  'stroke-linecap'?: StrokeLinecapProperty | StrokeLinecapProperty[];
  'stroke-linejoin'?: StrokeLinejoinProperty | StrokeLinejoinProperty[];
  'stroke-miterlimit'?: GlobalsNumber | GlobalsNumber[];
  'stroke-opacity'?: GlobalsNumber | GlobalsNumber[];
  'stroke-width'?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[];
  'text-anchor'?: TextAnchorProperty | TextAnchorProperty[];
  'text-decoration'?: TextDecorationProperty | TextDecorationProperty[];
  'text-rendering'?: TextRenderingProperty | TextRenderingProperty[];
  'unicode-bidi'?: UnicodeBidiProperty | UnicodeBidiProperty[];
  'vector-effect'?: VectorEffectProperty | VectorEffectProperty[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  'white-space'?: WhiteSpaceProperty | WhiteSpaceProperty[];
  'word-spacing'?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  'writing-mode'?: WritingModeProperty | WritingModeProperty[];
}
export interface PropertiesHyphenFallback<TLength = string | 0> extends StandardPropertiesHyphenFallback<TLength>, VendorPropertiesHyphenFallback<TLength>, ObsoletePropertiesHyphenFallback<TLength>, SvgPropertiesHyphenFallback<TLength> {
}
export interface CounterStyle {
  additiveSymbols?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  speakAs?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}
export interface CounterStyleHyphen {
  'additive-symbols'?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  'speak-as'?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}
export interface CounterStyleFallback {
  additiveSymbols?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  speakAs?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}
export interface CounterStyleHyphenFallback {
  'additive-symbols'?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  'speak-as'?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}
export interface FontFace {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontDisplay?: FontFaceFontDisplayProperty;
  fontFamily?: string;
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontStretch?: FontFaceFontStretchProperty;
  fontStyle?: FontFaceFontStyleProperty;
  fontVariant?: FontFaceFontVariantProperty;
  fontVariationSettings?: FontFaceFontVariationSettingsProperty;
  fontWeight?: FontFaceFontWeightProperty;
  src?: string;
  unicodeRange?: string;
}
export interface FontFaceHyphen {
  '-moz-font-feature-settings'?: FontFaceFontFeatureSettingsProperty;
  'font-display'?: FontFaceFontDisplayProperty;
  'font-family'?: string;
  'font-feature-settings'?: FontFaceFontFeatureSettingsProperty;
  'font-stretch'?: FontFaceFontStretchProperty;
  'font-style'?: FontFaceFontStyleProperty;
  'font-variant'?: FontFaceFontVariantProperty;
  'font-variation-settings'?: FontFaceFontVariationSettingsProperty;
  'font-weight'?: FontFaceFontWeightProperty;
  src?: string;
  'unicode-range'?: string;
}
export interface FontFaceFallback {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  fontDisplay?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  fontFamily?: string | string[];
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  fontStretch?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  fontStyle?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  fontVariant?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  fontVariationSettings?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[];
  fontWeight?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  src?: string | string[];
  unicodeRange?: string | string[];
}
export interface FontFaceHyphenFallback {
  '-moz-font-feature-settings'?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  'font-display'?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  'font-family'?: string | string[];
  'font-feature-settings'?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  'font-stretch'?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  'font-style'?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  'font-variant'?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  'font-variation-settings'?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[];
  'font-weight'?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  src?: string | string[];
  'unicode-range'?: string | string[];
}
export interface Page<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength>;
  marks?: PageMarksProperty;
}
export interface PageHyphen<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength>;
  marks?: PageMarksProperty;
}
export interface PageFallback<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[];
  marks?: PageMarksProperty | PageMarksProperty[];
}
export interface PageHyphenFallback<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[];
  marks?: PageMarksProperty | PageMarksProperty[];
}
export interface Viewport<TLength = string | 0> {
  msHeight?: ViewportHeightProperty<TLength>;
  msMaxHeight?: ViewportMaxHeightProperty<TLength>;
  msMaxWidth?: ViewportMaxWidthProperty<TLength>;
  msMaxZoom?: ViewportMaxZoomProperty;
  msMinHeight?: ViewportMinHeightProperty<TLength>;
  msMinWidth?: ViewportMinWidthProperty<TLength>;
  msMinZoom?: ViewportMinZoomProperty;
  msOrientation?: ViewportOrientationProperty;
  msUserZoom?: ViewportUserZoomProperty;
  msWidth?: ViewportWidthProperty<TLength>;
  msZoom?: ViewportZoomProperty;
  OOrientation?: ViewportOrientationProperty;
  height?: ViewportHeightProperty<TLength>;
  maxHeight?: ViewportMaxHeightProperty<TLength>;
  maxWidth?: ViewportMaxWidthProperty<TLength>;
  maxZoom?: ViewportMaxZoomProperty;
  minHeight?: ViewportMinHeightProperty<TLength>;
  minWidth?: ViewportMinWidthProperty<TLength>;
  minZoom?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  userZoom?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}
export interface ViewportHyphen<TLength = string | 0> {
  '-ms-height'?: ViewportHeightProperty<TLength>;
  '-ms-max-height'?: ViewportMaxHeightProperty<TLength>;
  '-ms-max-width'?: ViewportMaxWidthProperty<TLength>;
  '-ms-max-zoom'?: ViewportMaxZoomProperty;
  '-ms-min-height'?: ViewportMinHeightProperty<TLength>;
  '-ms-min-width'?: ViewportMinWidthProperty<TLength>;
  '-ms-min-zoom'?: ViewportMinZoomProperty;
  '-ms-orientation'?: ViewportOrientationProperty;
  '-ms-user-zoom'?: ViewportUserZoomProperty;
  '-ms-width'?: ViewportWidthProperty<TLength>;
  '-ms-zoom'?: ViewportZoomProperty;
  '-o-orientation'?: ViewportOrientationProperty;
  height?: ViewportHeightProperty<TLength>;
  'max-height'?: ViewportMaxHeightProperty<TLength>;
  'max-width'?: ViewportMaxWidthProperty<TLength>;
  'max-zoom'?: ViewportMaxZoomProperty;
  'min-height'?: ViewportMinHeightProperty<TLength>;
  'min-width'?: ViewportMinWidthProperty<TLength>;
  'min-zoom'?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  'user-zoom'?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}
export interface ViewportFallback<TLength = string | 0> {
  msHeight?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  msMaxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  msMaxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  msMaxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  msMinHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  msMinWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  msMinZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  msOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  msUserZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  msWidth?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  msZoom?: ViewportZoomProperty | ViewportZoomProperty[];
  OOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  maxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  maxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  maxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  minHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  minWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  minZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  userZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}
export interface ViewportHyphenFallback<TLength = string | 0> {
  '-ms-height'?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  '-ms-max-height'?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  '-ms-max-width'?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  '-ms-max-zoom'?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  '-ms-min-height'?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  '-ms-min-width'?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  '-ms-min-zoom'?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  '-ms-orientation'?: ViewportOrientationProperty | ViewportOrientationProperty[];
  '-ms-user-zoom'?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  '-ms-width'?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  '-ms-zoom'?: ViewportZoomProperty | ViewportZoomProperty[];
  '-o-orientation'?: ViewportOrientationProperty | ViewportOrientationProperty[];
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  'max-height'?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  'max-width'?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  'max-zoom'?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  'min-height'?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  'min-width'?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  'min-zoom'?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  'user-zoom'?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}
export declare type AtRules = '@charset' | '@counter-style' | '@document' | '@font-face' | '@font-feature-values' | '@import' | '@keyframes' | '@media' | '@namespace' | '@page' | '@supports' | '@viewport';
export declare type AdvancedPseudos = ':-moz-dir' | '::cue' | '::slotted' | ':dir' | ':has' | ':host' | ':host-context' | ':is' | ':lang' | ':not' | ':nth-child' | ':nth-last-child' | ':nth-last-of-type' | ':nth-of-type' | ':where';
export declare type SimplePseudos = ':-moz-any-link' | ':-moz-full-screen' | ':-moz-only-whitespace' | ':-moz-placeholder' | ':-moz-read-only' | ':-moz-read-write' | ':-ms-fullscreen' | ':-ms-input-placeholder' | ':-webkit-any-link' | ':-webkit-full-screen' | '::-moz-placeholder' | '::-moz-progress-bar' | '::-moz-range-progress' | '::-moz-range-thumb' | '::-moz-range-track' | '::-moz-selection' | '::-ms-backdrop' | '::-ms-browse' | '::-ms-check' | '::-ms-clear' | '::-ms-fill' | '::-ms-fill-lower' | '::-ms-fill-upper' | '::-ms-reveal' | '::-ms-thumb' | '::-ms-ticks-after' | '::-ms-ticks-before' | '::-ms-tooltip' | '::-ms-track' | '::-ms-value' | '::-webkit-backdrop' | '::-webkit-input-placeholder' | '::-webkit-progress-bar' | '::-webkit-progress-inner-value' | '::-webkit-progress-value' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::after' | '::backdrop' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::grammar-error' | '::placeholder' | '::selection' | '::spelling-error' | ':active' | ':after' | ':any-link' | ':before' | ':blank' | ':checked' | ':default' | ':defined' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-letter' | ':first-line' | ':first-of-type' | ':focus' | ':focus-within' | ':fullscreen' | ':hover' | ':in-range' | ':indeterminate' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
export declare type Pseudos = AdvancedPseudos | SimplePseudos;
export declare type HtmlAttributes = '[-webkit-dropzone]' | '[-webkit-slot]' | '[abbr]' | '[accept-charset]' | '[accept]' | '[accesskey]' | '[action]' | '[align]' | '[alink]' | '[allow]' | '[allowfullscreen]' | '[allowpaymentrequest]' | '[alt]' | '[archive]' | '[async]' | '[autobuffer]' | '[autocapitalize]' | '[autocomplete]' | '[autofocus]' | '[autoplay]' | '[axis]' | '[background]' | '[behavior]' | '[bgcolor]' | '[border]' | '[bottommargin]' | '[buffered]' | '[cellpadding]' | '[cellspacing]' | '[char]' | '[charoff]' | '[charset]' | '[checked]' | '[cite]' | '[class]' | '[classid]' | '[clear]' | '[code]' | '[codebase]' | '[codetype]' | '[color]' | '[cols]' | '[colspan]' | '[command]' | '[compact]' | '[content]' | '[contenteditable]' | '[contextmenu]' | '[controls]' | '[coords]' | '[crossorigin]' | '[data]' | '[datafld]' | '[datasrc]' | '[datetime]' | '[declare]' | '[decoding]' | '[default]' | '[defer]' | '[dir]' | '[direction]' | '[disabled]' | '[download]' | '[draggable]' | '[dropzone]' | '[enctype]' | '[face]' | '[for]' | '[form]' | '[formaction]' | '[formenctype]' | '[formmethod]' | '[formnovalidate]' | '[formtarget]' | '[frame]' | '[frameborder]' | '[headers]' | '[height]' | '[hidden]' | '[high]' | '[href]' | '[hreflang]' | '[hspace]' | '[http-equiv]' | '[icon]' | '[id]' | '[inputmode]' | '[integrity]' | '[intrinsicsize]' | '[is]' | '[ismap]' | '[itemid]' | '[itemprop]' | '[itemref]' | '[itemscope]' | '[itemtype]' | '[kind]' | '[label]' | '[lang]' | '[language]' | '[leftmargin]' | '[link]' | '[longdesc]' | '[loop]' | '[low]' | '[manifest]' | '[marginheight]' | '[marginwidth]' | '[max]' | '[maxlength]' | '[mayscript]' | '[media]' | '[method]' | '[methods]' | '[min]' | '[minlength]' | '[moz-opaque]' | '[mozallowfullscreen]' | '[mozbrowser]' | '[mozcurrentsampleoffset]' | '[msallowfullscreen]' | '[multiple]' | '[muted]' | '[name]' | '[nohref]' | '[nomodule]' | '[noresize]' | '[noshade]' | '[novalidate]' | '[nowrap]' | '[object]' | '[onafterprint]' | '[onbeforeprint]' | '[onbeforeunload]' | '[onblur]' | '[onerror]' | '[onfocus]' | '[onhashchange]' | '[onlanguagechange]' | '[onload]' | '[onmessage]' | '[onoffline]' | '[ononline]' | '[onpopstate]' | '[onredo]' | '[onresize]' | '[onstorage]' | '[onundo]' | '[onunload]' | '[open]' | '[optimum]' | '[ping]' | '[placeholder]' | '[played]' | '[poster]' | '[prefetch]' | '[preload]' | '[profile]' | '[prompt]' | '[radiogroup]' | '[readonly]' | '[referrerpolicy]' | '[rel]' | '[required]' | '[rev]' | '[reversed]' | '[rightmargin]' | '[rows]' | '[rowspan]' | '[rules]' | '[sandbox-allow-modals]' | '[sandbox-allow-popups-to-escape-sandbox]' | '[sandbox-allow-popups]' | '[sandbox-allow-presentation]' | '[sandbox-allow-storage-access-by-user-activation]' | '[sandbox-allow-top-navigation-by-user-activation]' | '[sandbox]' | '[scope]' | '[scoped]' | '[scrollamount]' | '[scrolldelay]' | '[scrolling]' | '[selected]' | '[shape]' | '[size]' | '[sizes]' | '[slot]' | '[span]' | '[spellcheck]' | '[src]' | '[srcdoc]' | '[srclang]' | '[srcset]' | '[standby]' | '[start]' | '[style]' | '[summary]' | '[tabindex]' | '[target]' | '[text]' | '[title]' | '[topmargin]' | '[translate]' | '[truespeed]' | '[type]' | '[typemustmatch]' | '[usemap]' | '[valign]' | '[value]' | '[valuetype]' | '[version]' | '[vlink]' | '[volume]' | '[vspace]' | '[webkitallowfullscreen]' | '[width]' | '[wrap]' | '[xmlns]';
export declare type SvgAttributes = '[accent-height]' | '[alignment-baseline]' | '[allowReorder]' | '[alphabetic]' | '[animation]' | '[arabic-form]' | '[ascent]' | '[attributeName]' | '[attributeType]' | '[azimuth]' | '[baseFrequency]' | '[baseProfile]' | '[baseline-shift]' | '[bbox]' | '[begin]' | '[bias]' | '[by]' | '[calcMode]' | '[cap-height]' | '[class]' | '[clip-path]' | '[clip-rule]' | '[clipPathUnits]' | '[clip]' | '[color-interpolation-filters]' | '[color-interpolation]' | '[color-profile]' | '[color-rendering]' | '[color]' | '[contentScriptType]' | '[contentStyleType]' | '[cursor]' | '[cx]' | '[cy]' | '[d]' | '[descent]' | '[diffuseConstant]' | '[direction]' | '[display]' | '[divisor]' | '[document]' | '[dominant-baseline]' | '[download]' | '[dur]' | '[dx]' | '[dy]' | '[edgeMode]' | '[elevation]' | '[enable-background]' | '[externalResourcesRequired]' | '[fill-opacity]' | '[fill-rule]' | '[fill]' | '[filterRes]' | '[filterUnits]' | '[filter]' | '[flood-color]' | '[flood-opacity]' | '[font-family]' | '[font-size-adjust]' | '[font-size]' | '[font-stretch]' | '[font-style]' | '[font-variant]' | '[font-weight]' | '[format]' | '[fr]' | '[from]' | '[fx]' | '[fy]' | '[g1]' | '[g2]' | '[global]' | '[glyph-name]' | '[glyph-orientation-horizontal]' | '[glyph-orientation-vertical]' | '[glyphRef]' | '[gradientTransform]' | '[gradientUnits]' | '[graphical]' | '[hanging]' | '[hatchContentUnits]' | '[hatchUnits]' | '[height]' | '[horiz-adv-x]' | '[horiz-origin-x]' | '[horiz-origin-y]' | '[href]' | '[hreflang]' | '[id]' | '[ideographic]' | '[image-rendering]' | '[in2]' | '[in]' | '[k1]' | '[k2]' | '[k3]' | '[k4]' | '[k]' | '[kernelMatrix]' | '[kernelUnitLength]' | '[kerning]' | '[keyPoints]' | '[lang]' | '[lengthAdjust]' | '[letter-spacing]' | '[lighterForError]' | '[lighting-color]' | '[limitingConeAngle]' | '[local]' | '[marker-end]' | '[marker-mid]' | '[marker-start]' | '[markerHeight]' | '[markerUnits]' | '[markerWidth]' | '[maskContentUnits]' | '[maskUnits]' | '[mask]' | '[mathematical]' | '[media]' | '[method]' | '[mode]' | '[name]' | '[numOctaves]' | '[offset]' | '[opacity]' | '[operator]' | '[order]' | '[orient]' | '[orientation]' | '[origin]' | '[overflow]' | '[overline-position]' | '[overline-thickness]' | '[paint-order]' | '[panose-1]' | '[path]' | '[patternContentUnits]' | '[patternTransform]' | '[patternUnits]' | '[ping]' | '[pitch]' | '[pointer-events]' | '[pointsAtX]' | '[pointsAtY]' | '[pointsAtZ]' | '[points]' | '[preserveAlpha]' | '[preserveAspectRatio]' | '[primitiveUnits]' | '[r]' | '[radius]' | '[refX]' | '[refY]' | '[referrerPolicy]' | '[rel]' | '[rendering-intent]' | '[repeatCount]' | '[requiredExtensions]' | '[requiredFeatures]' | '[rotate]' | '[rx]' | '[ry]' | '[scale]' | '[seed]' | '[shape-rendering]' | '[side]' | '[slope]' | '[solid-color]' | '[solid-opacity]' | '[spacing]' | '[specularConstant]' | '[specularExponent]' | '[spreadMethod]' | '[startOffset]' | '[stdDeviation]' | '[stemh]' | '[stemv]' | '[stitchTiles]' | '[stop-color]' | '[stop-opacity]' | '[strikethrough-position]' | '[strikethrough-thickness]' | '[string]' | '[stroke-dasharray]' | '[stroke-dashoffset]' | '[stroke-linecap]' | '[stroke-linejoin]' | '[stroke-miterlimit]' | '[stroke-opacity]' | '[stroke-width]' | '[stroke]' | '[style]' | '[surfaceScale]' | '[systemLanguage]' | '[tabindex]' | '[targetX]' | '[targetY]' | '[target]' | '[text-anchor]' | '[text-decoration]' | '[text-overflow]' | '[text-rendering]' | '[textLength]' | '[title]' | '[to]' | '[transform]' | '[type]' | '[u1]' | '[u2]' | '[underline-position]' | '[underline-thickness]' | '[unicode-bidi]' | '[unicode-range]' | '[unicode]' | '[units-per-em]' | '[v-alphabetic]' | '[v-hanging]' | '[v-ideographic]' | '[v-mathematical]' | '[values]' | '[vector-effect]' | '[version]' | '[vert-adv-y]' | '[vert-origin-x]' | '[vert-origin-y]' | '[viewBox]' | '[viewTarget]' | '[visibility]' | '[white-space]' | '[width]' | '[widths]' | '[word-spacing]' | '[writing-mode]' | '[x-height]' | '[x1]' | '[x2]' | '[xChannelSelector]' | '[x]' | '[y1]' | '[y2]' | '[yChannelSelector]' | '[y]' | '[z]' | '[zoomAndPan]';
export declare type Globals = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
declare type GlobalsString = Globals | string;
declare type GlobalsNumber = Globals | number;
export declare type AlignContentProperty = Globals | ContentDistribution | ContentPosition | 'baseline' | 'normal' | string;
export declare type AlignItemsProperty = Globals | SelfPosition | 'baseline' | 'normal' | 'stretch' | string;
export declare type AlignSelfProperty = Globals | SelfPosition | 'auto' | 'baseline' | 'normal' | 'stretch' | string;
export declare type AnimationProperty = Globals | SingleAnimation | string;
export declare type AnimationDirectionProperty = Globals | SingleAnimationDirection | string;
export declare type AnimationFillModeProperty = Globals | SingleAnimationFillMode | string;
export declare type AnimationIterationCountProperty = Globals | 'infinite' | string | number;
export declare type AnimationNameProperty = Globals | 'none' | string;
export declare type AnimationPlayStateProperty = Globals | 'paused' | 'running' | string;
export declare type AnimationTimingFunctionProperty = Globals | SingleTimingFunction | string;
export declare type AppearanceProperty = Globals | 'none';
export declare type BackdropFilterProperty = Globals | 'none' | string;
export declare type BackfaceVisibilityProperty = Globals | 'hidden' | 'visible';
export declare type BackgroundProperty<TLength> = Globals | FinalBgLayer<TLength> | string;
export declare type BackgroundAttachmentProperty = Globals | Attachment | string;
export declare type BackgroundBlendModeProperty = Globals | BlendMode | string;
export declare type BackgroundClipProperty = Globals | Box | string;
export declare type BackgroundColorProperty = Globals | Color;
export declare type BackgroundImageProperty = Globals | 'none' | string;
export declare type BackgroundOriginProperty = Globals | Box | string;
export declare type BackgroundPositionProperty<TLength> = Globals | BgPosition<TLength> | string;
export declare type BackgroundPositionXProperty<TLength> = Globals | TLength | 'center' | 'left' | 'right' | 'x-end' | 'x-start' | string;
export declare type BackgroundPositionYProperty<TLength> = Globals | TLength | 'bottom' | 'center' | 'top' | 'y-end' | 'y-start' | string;
export declare type BackgroundRepeatProperty = Globals | RepeatStyle | string;
export declare type BackgroundSizeProperty<TLength> = Globals | BgSize<TLength> | string;
export declare type BlockOverflowProperty = Globals | 'clip' | 'ellipsis' | string;
export declare type BlockSizeProperty<TLength> = Globals | TLength | 'auto' | 'available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type BorderProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderBlockEndProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderBlockEndColorProperty = Globals | Color;
export declare type BorderBlockEndStyleProperty = Globals | LineStyle | string;
export declare type BorderBlockEndWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type BorderBlockStartProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderBlockStartColorProperty = Globals | Color;
export declare type BorderBlockStartStyleProperty = Globals | LineStyle | string;
export declare type BorderBlockStartWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type BorderBottomProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderBottomColorProperty = Globals | Color;
export declare type BorderBottomLeftRadiusProperty<TLength> = Globals | TLength | string;
export declare type BorderBottomRightRadiusProperty<TLength> = Globals | TLength | string;
export declare type BorderBottomStyleProperty = Globals | LineStyle;
export declare type BorderBottomWidthProperty<TLength> = Globals | LineWidth<TLength>;
export declare type BorderCollapseProperty = Globals | 'collapse' | 'separate';
export declare type BorderColorProperty = Globals | Color | string;
export declare type BorderImageProperty = Globals | 'none' | 'repeat' | 'round' | 'space' | 'stretch' | string | number;
export declare type BorderImageOutsetProperty<TLength> = Globals | TLength | string | number;
export declare type BorderImageRepeatProperty = Globals | 'repeat' | 'round' | 'space' | 'stretch' | string;
export declare type BorderImageSliceProperty = Globals | string | number;
export declare type BorderImageSourceProperty = Globals | 'none' | string;
export declare type BorderImageWidthProperty<TLength> = Globals | TLength | 'auto' | string | number;
export declare type BorderInlineEndProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderInlineEndColorProperty = Globals | Color;
export declare type BorderInlineEndStyleProperty = Globals | LineStyle | string;
export declare type BorderInlineEndWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type BorderInlineStartProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderInlineStartColorProperty = Globals | Color;
export declare type BorderInlineStartStyleProperty = Globals | LineStyle | string;
export declare type BorderInlineStartWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type BorderLeftProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderLeftColorProperty = Globals | Color;
export declare type BorderLeftStyleProperty = Globals | LineStyle;
export declare type BorderLeftWidthProperty<TLength> = Globals | LineWidth<TLength>;
export declare type BorderRadiusProperty<TLength> = Globals | TLength | string;
export declare type BorderRightProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderRightColorProperty = Globals | Color;
export declare type BorderRightStyleProperty = Globals | LineStyle;
export declare type BorderRightWidthProperty<TLength> = Globals | LineWidth<TLength>;
export declare type BorderSpacingProperty<TLength> = Globals | TLength | string;
export declare type BorderStyleProperty = Globals | LineStyle | string;
export declare type BorderTopProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type BorderTopColorProperty = Globals | Color;
export declare type BorderTopLeftRadiusProperty<TLength> = Globals | TLength | string;
export declare type BorderTopRightRadiusProperty<TLength> = Globals | TLength | string;
export declare type BorderTopStyleProperty = Globals | LineStyle;
export declare type BorderTopWidthProperty<TLength> = Globals | LineWidth<TLength>;
export declare type BorderWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type BottomProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type BoxAlignProperty = Globals | 'baseline' | 'center' | 'end' | 'start' | 'stretch';
export declare type BoxDecorationBreakProperty = Globals | 'clone' | 'slice';
export declare type BoxDirectionProperty = Globals | 'inherit' | 'normal' | 'reverse';
export declare type BoxLinesProperty = Globals | 'multiple' | 'single';
export declare type BoxOrientProperty = Globals | 'block-axis' | 'horizontal' | 'inherit' | 'inline-axis' | 'vertical';
export declare type BoxPackProperty = Globals | 'center' | 'end' | 'justify' | 'start';
export declare type BoxShadowProperty = Globals | 'none' | string;
export declare type BoxSizingProperty = Globals | 'border-box' | 'content-box';
export declare type BreakAfterProperty = Globals | 'auto' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region' | 'column' | 'left' | 'page' | 'recto' | 'region' | 'right' | 'verso';
export declare type BreakBeforeProperty = Globals | 'auto' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region' | 'column' | 'left' | 'page' | 'recto' | 'region' | 'right' | 'verso';
export declare type BreakInsideProperty = Globals | 'auto' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region';
export declare type CaptionSideProperty = Globals | 'block-end' | 'block-start' | 'bottom' | 'inline-end' | 'inline-start' | 'top';
export declare type CaretColorProperty = Globals | Color | 'auto';
export declare type ClearProperty = Globals | 'both' | 'inline-end' | 'inline-start' | 'left' | 'none' | 'right';
export declare type ClipProperty = Globals | 'auto' | string;
export declare type ClipPathProperty = Globals | GeometryBox | 'none' | string;
export declare type ColorProperty = Globals | Color;
export declare type ColorAdjustProperty = Globals | 'economy' | 'exact';
export declare type ColumnCountProperty = Globals | 'auto' | number;
export declare type ColumnFillProperty = Globals | 'auto' | 'balance' | 'balance-all';
export declare type ColumnGapProperty<TLength> = Globals | TLength | 'normal' | string;
export declare type ColumnRuleProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type ColumnRuleColorProperty = Globals | Color;
export declare type ColumnRuleStyleProperty = Globals | LineStyle | string;
export declare type ColumnRuleWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type ColumnSpanProperty = Globals | 'all' | 'none';
export declare type ColumnWidthProperty<TLength> = Globals | TLength | 'auto';
export declare type ColumnsProperty<TLength> = Globals | TLength | 'auto' | string | number;
export declare type ContainProperty = Globals | 'content' | 'layout' | 'none' | 'paint' | 'size' | 'strict' | 'style' | string;
export declare type ContentProperty = Globals | ContentList | 'none' | 'normal' | string;
export declare type CounterIncrementProperty = Globals | 'none' | string;
export declare type CounterResetProperty = Globals | 'none' | string;
export declare type CursorProperty = Globals | '-moz-grab' | '-webkit-grab' | 'alias' | 'all-scroll' | 'auto' | 'cell' | 'col-resize' | 'context-menu' | 'copy' | 'crosshair' | 'default' | 'e-resize' | 'ew-resize' | 'grab' | 'grabbing' | 'help' | 'move' | 'n-resize' | 'ne-resize' | 'nesw-resize' | 'no-drop' | 'none' | 'not-allowed' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'pointer' | 'progress' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'text' | 'vertical-text' | 'w-resize' | 'wait' | 'zoom-in' | 'zoom-out' | string;
export declare type DirectionProperty = Globals | 'ltr' | 'rtl';
export declare type DisplayProperty = Globals | DisplayOutside | DisplayInside | DisplayInternal | DisplayLegacy | 'contents' | 'list-item' | 'none' | string;
export declare type EmptyCellsProperty = Globals | 'hide' | 'show';
export declare type FilterProperty = Globals | 'none' | string;
export declare type FlexProperty<TLength> = Globals | TLength | 'auto' | 'available' | 'content' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string | number;
export declare type FlexBasisProperty<TLength> = Globals | TLength | '-webkit-auto' | 'auto' | 'available' | 'content' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type FlexDirectionProperty = Globals | 'column' | 'column-reverse' | 'row' | 'row-reverse';
export declare type FlexFlowProperty = Globals | 'column' | 'column-reverse' | 'nowrap' | 'row' | 'row-reverse' | 'wrap' | 'wrap-reverse' | string;
export declare type FlexWrapProperty = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';
export declare type FloatProperty = Globals | 'inline-end' | 'inline-start' | 'left' | 'none' | 'right';
export declare type FontProperty = Globals | 'caption' | 'icon' | 'menu' | 'message-box' | 'small-caption' | 'status-bar' | string;
export declare type FontFamilyProperty = Globals | GenericFamily | string;
export declare type FontFeatureSettingsProperty = Globals | 'normal' | string;
export declare type FontKerningProperty = Globals | 'auto' | 'none' | 'normal';
export declare type FontLanguageOverrideProperty = Globals | 'normal' | string;
export declare type FontOpticalSizingProperty = Globals | 'auto' | 'none';
export declare type FontSizeProperty<TLength> = Globals | AbsoluteSize | TLength | 'larger' | 'smaller' | string;
export declare type FontSizeAdjustProperty = Globals | 'none' | number;
export declare type FontStretchProperty = Globals | FontStretchAbsolute;
export declare type FontStyleProperty = Globals | 'italic' | 'normal' | 'oblique' | string;
export declare type FontSynthesisProperty = Globals | 'none' | 'style' | 'weight' | string;
export declare type FontVariantProperty = Globals | EastAsianVariantValues | 'all-petite-caps' | 'all-small-caps' | 'common-ligatures' | 'contextual' | 'diagonal-fractions' | 'discretionary-ligatures' | 'full-width' | 'historical-forms' | 'historical-ligatures' | 'lining-nums' | 'no-common-ligatures' | 'no-contextual' | 'no-discretionary-ligatures' | 'no-historical-ligatures' | 'none' | 'normal' | 'oldstyle-nums' | 'ordinal' | 'petite-caps' | 'proportional-nums' | 'proportional-width' | 'ruby' | 'slashed-zero' | 'small-caps' | 'stacked-fractions' | 'tabular-nums' | 'titling-caps' | 'unicase' | string;
export declare type FontVariantAlternatesProperty = Globals | 'historical-forms' | 'normal' | string;
export declare type FontVariantCapsProperty = Globals | 'all-petite-caps' | 'all-small-caps' | 'normal' | 'petite-caps' | 'small-caps' | 'titling-caps' | 'unicase';
export declare type FontVariantEastAsianProperty = Globals | EastAsianVariantValues | 'full-width' | 'normal' | 'proportional-width' | 'ruby' | string;
export declare type FontVariantLigaturesProperty = Globals | 'common-ligatures' | 'contextual' | 'discretionary-ligatures' | 'historical-ligatures' | 'no-common-ligatures' | 'no-contextual' | 'no-discretionary-ligatures' | 'no-historical-ligatures' | 'none' | 'normal' | string;
export declare type FontVariantNumericProperty = Globals | 'diagonal-fractions' | 'lining-nums' | 'normal' | 'oldstyle-nums' | 'ordinal' | 'proportional-nums' | 'slashed-zero' | 'stacked-fractions' | 'tabular-nums' | string;
export declare type FontVariantPositionProperty = Globals | 'normal' | 'sub' | 'super';
export declare type FontVariationSettingsProperty = Globals | 'normal' | string;
export declare type FontWeightProperty = Globals | FontWeightAbsolute | 'bolder' | 'lighter';
export declare type GapProperty<TLength> = Globals | TLength | 'normal' | string;
export declare type GridProperty = Globals | 'none' | string;
export declare type GridAreaProperty = Globals | GridLine | string;
export declare type GridAutoColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | string;
export declare type GridAutoFlowProperty = Globals | 'column' | 'dense' | 'row' | string;
export declare type GridAutoRowsProperty<TLength> = Globals | TrackBreadth<TLength> | string;
export declare type GridColumnProperty = Globals | GridLine | string;
export declare type GridColumnEndProperty = Globals | GridLine;
export declare type GridColumnGapProperty<TLength> = Globals | TLength | string;
export declare type GridColumnStartProperty = Globals | GridLine;
export declare type GridGapProperty<TLength> = Globals | TLength | string;
export declare type GridRowProperty = Globals | GridLine | string;
export declare type GridRowEndProperty = Globals | GridLine;
export declare type GridRowGapProperty<TLength> = Globals | TLength | string;
export declare type GridRowStartProperty = Globals | GridLine;
export declare type GridTemplateProperty = Globals | 'none' | string;
export declare type GridTemplateAreasProperty = Globals | 'none' | string;
export declare type GridTemplateColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | 'none' | string;
export declare type GridTemplateRowsProperty<TLength> = Globals | TrackBreadth<TLength> | 'none' | string;
export declare type HangingPunctuationProperty = Globals | 'allow-end' | 'first' | 'force-end' | 'last' | 'none' | string;
export declare type HeightProperty<TLength> = Globals | TLength | 'auto' | 'available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type HyphensProperty = Globals | 'auto' | 'manual' | 'none';
export declare type ImageOrientationProperty = Globals | 'flip' | 'from-image' | string;
export declare type ImageRenderingProperty = Globals | '-moz-crisp-edges' | '-o-crisp-edges' | '-webkit-optimize-contrast' | 'auto' | 'crisp-edges' | 'pixelated';
export declare type ImageResolutionProperty = Globals | 'from-image' | string;
export declare type ImeModeProperty = Globals | 'active' | 'auto' | 'disabled' | 'inactive' | 'normal';
export declare type InitialLetterProperty = Globals | 'normal' | string | number;
export declare type InlineSizeProperty<TLength> = Globals | TLength | 'auto' | 'available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type InsetBlockEndProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type InsetBlockStartProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type InsetInlineEndProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type InsetInlineStartProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type IsolationProperty = Globals | 'auto' | 'isolate';
export declare type JustifyContentProperty = Globals | ContentDistribution | ContentPosition | 'left' | 'normal' | 'right' | string;
export declare type JustifyItemsProperty = Globals | SelfPosition | 'baseline' | 'left' | 'legacy' | 'normal' | 'right' | 'stretch' | string;
export declare type JustifySelfProperty = Globals | SelfPosition | 'auto' | 'baseline' | 'left' | 'normal' | 'right' | 'stretch' | string;
export declare type LeftProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type LetterSpacingProperty<TLength> = Globals | TLength | 'normal';
export declare type LineBreakProperty = Globals | 'auto' | 'loose' | 'normal' | 'strict';
export declare type LineClampProperty = Globals | 'none' | number;
export declare type LineHeightProperty<TLength> = Globals | TLength | 'normal' | string | number;
export declare type ListStyleProperty = Globals | 'inside' | 'none' | 'outside' | string;
export declare type ListStyleImageProperty = Globals | 'none' | string;
export declare type ListStylePositionProperty = Globals | 'inside' | 'outside';
export declare type ListStyleTypeProperty = Globals | 'none' | string;
export declare type MarginProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginBlockEndProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginBlockStartProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginBottomProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginInlineEndProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginInlineStartProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginLeftProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginRightProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MarginTopProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type MaskProperty<TLength> = Globals | MaskLayer<TLength> | string;
export declare type MaskBorderProperty = Globals | 'alpha' | 'luminance' | 'none' | 'repeat' | 'round' | 'space' | 'stretch' | string | number;
export declare type MaskBorderModeProperty = Globals | 'alpha' | 'luminance';
export declare type MaskBorderOutsetProperty<TLength> = Globals | TLength | string | number;
export declare type MaskBorderRepeatProperty = Globals | 'repeat' | 'round' | 'space' | 'stretch' | string;
export declare type MaskBorderSliceProperty = Globals | string | number;
export declare type MaskBorderSourceProperty = Globals | 'none' | string;
export declare type MaskBorderWidthProperty<TLength> = Globals | TLength | 'auto' | string | number;
export declare type MaskClipProperty = Globals | GeometryBox | 'no-clip' | string;
export declare type MaskCompositeProperty = Globals | CompositingOperator | string;
export declare type MaskImageProperty = Globals | 'none' | string;
export declare type MaskModeProperty = Globals | MaskingMode | string;
export declare type MaskOriginProperty = Globals | GeometryBox | string;
export declare type MaskPositionProperty<TLength> = Globals | Position<TLength> | string;
export declare type MaskRepeatProperty = Globals | RepeatStyle | string;
export declare type MaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;
export declare type MaskTypeProperty = Globals | 'alpha' | 'luminance';
export declare type MaxBlockSizeProperty<TLength> = Globals | TLength | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string;
export declare type MaxHeightProperty<TLength> = Globals | TLength | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string;
export declare type MaxInlineSizeProperty<TLength> = Globals | TLength | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string;
export declare type MaxLinesProperty = Globals | 'none' | number;
export declare type MaxWidthProperty<TLength> = Globals | TLength | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string;
export declare type MinBlockSizeProperty<TLength> = Globals | TLength | 'auto' | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type MinHeightProperty<TLength> = Globals | TLength | 'auto' | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type MinInlineSizeProperty<TLength> = Globals | TLength | 'auto' | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type MinWidthProperty<TLength> = Globals | TLength | 'auto' | 'fill-available' | 'fit-content' | 'max-content' | 'min-content' | string;
export declare type MixBlendModeProperty = Globals | BlendMode;
export declare type MotionPathProperty = Globals | 'none' | string;
export declare type ObjectFitProperty = Globals | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export declare type ObjectPositionProperty<TLength> = Globals | Position<TLength>;
export declare type OffsetPositionProperty<TLength> = Globals | Position<TLength> | 'auto';
export declare type OutlineProperty<TLength> = Globals | Color | LineStyle | LineWidth<TLength> | 'auto' | 'invert' | string;
export declare type OutlineColorProperty = Globals | Color | 'invert';
export declare type OutlineOffsetProperty<TLength> = Globals | TLength;
export declare type OutlineStyleProperty = Globals | LineStyle | 'auto' | string;
export declare type OutlineWidthProperty<TLength> = Globals | LineWidth<TLength>;
export declare type OverflowProperty = Globals | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible' | string;
export declare type OverflowAnchorProperty = Globals | 'auto' | 'none';
export declare type OverflowBlockProperty = Globals | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible' | string;
export declare type OverflowClipBoxProperty = Globals | 'content-box' | 'padding-box';
export declare type OverflowInlineProperty = Globals | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible' | string;
export declare type OverflowWrapProperty = Globals | 'break-word' | 'normal';
export declare type OverflowXProperty = Globals | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';
export declare type OverflowYProperty = Globals | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';
export declare type OverscrollBehaviorProperty = Globals | 'auto' | 'contain' | 'none' | string;
export declare type OverscrollBehaviorXProperty = Globals | 'auto' | 'contain' | 'none';
export declare type OverscrollBehaviorYProperty = Globals | 'auto' | 'contain' | 'none';
export declare type PaddingProperty<TLength> = Globals | TLength | string;
export declare type PaddingBlockEndProperty<TLength> = Globals | TLength | string;
export declare type PaddingBlockStartProperty<TLength> = Globals | TLength | string;
export declare type PaddingBottomProperty<TLength> = Globals | TLength | string;
export declare type PaddingInlineEndProperty<TLength> = Globals | TLength | string;
export declare type PaddingInlineStartProperty<TLength> = Globals | TLength | string;
export declare type PaddingLeftProperty<TLength> = Globals | TLength | string;
export declare type PaddingRightProperty<TLength> = Globals | TLength | string;
export declare type PaddingTopProperty<TLength> = Globals | TLength | string;
export declare type PageBreakAfterProperty = Globals | 'always' | 'auto' | 'avoid' | 'left' | 'recto' | 'right' | 'verso';
export declare type PageBreakBeforeProperty = Globals | 'always' | 'auto' | 'avoid' | 'left' | 'recto' | 'right' | 'verso';
export declare type PageBreakInsideProperty = Globals | 'auto' | 'avoid';
export declare type PaintOrderProperty = Globals | 'fill' | 'markers' | 'normal' | 'stroke' | string;
export declare type PerspectiveProperty<TLength> = Globals | TLength | 'none';
export declare type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;
export declare type PlaceContentProperty = Globals | ContentDistribution | ContentPosition | 'baseline' | 'normal' | string;
export declare type PlaceItemsProperty = Globals | SelfPosition | 'baseline' | 'normal' | 'stretch' | string;
export declare type PointerEventsProperty = Globals | 'all' | 'auto' | 'fill' | 'inherit' | 'none' | 'painted' | 'stroke' | 'visible' | 'visibleFill' | 'visiblePainted' | 'visibleStroke';
export declare type PositionProperty = Globals | '-webkit-sticky' | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
export declare type QuotesProperty = Globals | 'none' | string;
export declare type ResizeProperty = Globals | 'block' | 'both' | 'horizontal' | 'inline' | 'none' | 'vertical';
export declare type RightProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type RotateProperty = Globals | 'none' | string;
export declare type RowGapProperty<TLength> = Globals | TLength | 'normal' | string;
export declare type RubyAlignProperty = Globals | 'center' | 'space-around' | 'space-between' | 'start';
export declare type RubyMergeProperty = Globals | 'auto' | 'collapse' | 'separate';
export declare type RubyPositionProperty = Globals | 'inter-character' | 'over' | 'under';
export declare type ScaleProperty = Globals | 'none' | string | number;
export declare type ScrollBehaviorProperty = Globals | 'auto' | 'smooth';
export declare type ScrollMarginProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollMarginBlockProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollMarginBlockEndProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginBlockStartProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginBottomProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginInlineEndProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginInlineStartProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginLeftProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginRightProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollMarginTopProperty<TLength> = Globals | TLength | 'auto';
export declare type ScrollPaddingProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingBlockProperty<TLength> = Globals | TLength | string;
export declare type ScrollPaddingBlockEndProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingBlockStartProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingBottomProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingInlineProperty<TLength> = Globals | TLength | string;
export declare type ScrollPaddingInlineEndProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingInlineStartProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingLeftProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingRightProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollPaddingTopProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type ScrollSnapAlignProperty = Globals | 'center' | 'end' | 'none' | 'start' | string;
export declare type ScrollSnapCoordinateProperty<TLength> = Globals | Position<TLength> | 'none' | string;
export declare type ScrollSnapDestinationProperty<TLength> = Globals | Position<TLength>;
export declare type ScrollSnapPointsXProperty = Globals | 'none' | string;
export declare type ScrollSnapPointsYProperty = Globals | 'none' | string;
export declare type ScrollSnapStopProperty = Globals | 'always' | 'normal';
export declare type ScrollSnapTypeProperty = Globals | 'none' | string;
export declare type ScrollSnapTypeXProperty = Globals | 'mandatory' | 'none' | 'proximity';
export declare type ScrollSnapTypeYProperty = Globals | 'mandatory' | 'none' | 'proximity';
export declare type ScrollbarColorProperty = Globals | Color | 'auto' | 'dark' | 'light';
export declare type ScrollbarWidthProperty<TLength> = Globals | TLength | 'auto' | 'none' | 'thin';
export declare type ShapeMarginProperty<TLength> = Globals | TLength | string;
export declare type ShapeOutsideProperty = Globals | Box | 'margin-box' | 'none' | string;
export declare type TabSizeProperty<TLength> = Globals | TLength | number;
export declare type TableLayoutProperty = Globals | 'auto' | 'fixed';
export declare type TextAlignProperty = Globals | 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start';
export declare type TextAlignLastProperty = Globals | 'auto' | 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
export declare type TextCombineUprightProperty = Globals | 'all' | 'digits' | 'none' | string;
export declare type TextDecorationProperty = Globals | Color | 'blink' | 'dashed' | 'dotted' | 'double' | 'line-through' | 'none' | 'overline' | 'solid' | 'underline' | 'wavy' | string;
export declare type TextDecorationColorProperty = Globals | Color;
export declare type TextDecorationLineProperty = Globals | 'blink' | 'line-through' | 'none' | 'overline' | 'underline' | string;
export declare type TextDecorationSkipProperty = Globals | 'box-decoration' | 'edges' | 'leading-spaces' | 'none' | 'objects' | 'spaces' | 'trailing-spaces' | string;
export declare type TextDecorationSkipInkProperty = Globals | 'auto' | 'none';
export declare type TextDecorationStyleProperty = Globals | 'dashed' | 'dotted' | 'double' | 'solid' | 'wavy';
export declare type TextEmphasisProperty = Globals | Color | 'circle' | 'dot' | 'double-circle' | 'filled' | 'none' | 'open' | 'sesame' | 'triangle' | string;
export declare type TextEmphasisColorProperty = Globals | Color;
export declare type TextEmphasisStyleProperty = Globals | 'circle' | 'dot' | 'double-circle' | 'filled' | 'none' | 'open' | 'sesame' | 'triangle' | string;
export declare type TextIndentProperty<TLength> = Globals | TLength | string;
export declare type TextJustifyProperty = Globals | 'auto' | 'inter-character' | 'inter-word' | 'none';
export declare type TextOrientationProperty = Globals | 'mixed' | 'sideways' | 'upright';
export declare type TextOverflowProperty = Globals | 'clip' | 'ellipsis' | string;
export declare type TextRenderingProperty = Globals | 'auto' | 'geometricPrecision' | 'optimizeLegibility' | 'optimizeSpeed';
export declare type TextShadowProperty = Globals | 'none' | string;
export declare type TextSizeAdjustProperty = Globals | 'auto' | 'none' | string;
export declare type TextTransformProperty = Globals | 'capitalize' | 'full-width' | 'lowercase' | 'none' | 'uppercase';
export declare type TextUnderlinePositionProperty = Globals | 'auto' | 'left' | 'right' | 'under' | string;
export declare type TopProperty<TLength> = Globals | TLength | 'auto' | string;
export declare type TouchActionProperty = Globals | '-ms-manipulation' | '-ms-pinch-zoom' | 'auto' | 'manipulation' | 'none' | 'pan-down' | 'pan-left' | 'pan-right' | 'pan-up' | 'pan-x' | 'pan-y' | 'pinch-zoom' | string;
export declare type TransformProperty = Globals | 'none' | string;
export declare type TransformBoxProperty = Globals | 'border-box' | 'fill-box' | 'view-box';
export declare type TransformOriginProperty<TLength> = Globals | TLength | 'bottom' | 'center' | 'left' | 'right' | 'top' | string;
export declare type TransformStyleProperty = Globals | 'flat' | 'preserve-3d';
export declare type TransitionProperty = Globals | SingleTransition | string;
export declare type TransitionPropertyProperty = Globals | 'all' | 'none' | string;
export declare type TransitionTimingFunctionProperty = Globals | SingleTimingFunction | string;
export declare type TranslateProperty<TLength> = Globals | TLength | 'none' | string;
export declare type UnicodeBidiProperty = Globals | '-moz-isolate' | '-moz-isolate-override' | '-moz-plaintext' | '-webkit-isolate' | 'bidi-override' | 'embed' | 'isolate' | 'isolate-override' | 'normal' | 'plaintext';
export declare type UserSelectProperty = Globals | '-moz-none' | 'all' | 'auto' | 'contain' | 'element' | 'none' | 'text';
export declare type VerticalAlignProperty<TLength> = Globals | TLength | 'baseline' | 'bottom' | 'middle' | 'sub' | 'super' | 'text-bottom' | 'text-top' | 'top' | string;
export declare type VisibilityProperty = Globals | 'collapse' | 'hidden' | 'visible';
export declare type WhiteSpaceProperty = Globals | '-moz-pre-wrap' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
export declare type WidthProperty<TLength> = Globals | TLength | '-moz-fit-content' | '-moz-max-content' | '-moz-min-content' | '-webkit-fill-available' | '-webkit-fit-content' | '-webkit-max-content' | '-webkit-min-content' | 'auto' | 'available' | 'fit-content' | 'intrinsic' | 'max-content' | 'min-content' | 'min-intrinsic' | string;
export declare type WillChangeProperty = Globals | AnimateableFeature | 'auto' | string;
export declare type WordBreakProperty = Globals | 'break-all' | 'break-word' | 'keep-all' | 'normal';
export declare type WordSpacingProperty<TLength> = Globals | TLength | 'normal' | string;
export declare type WordWrapProperty = Globals | 'break-word' | 'normal';
export declare type WritingModeProperty = Globals | 'horizontal-tb' | 'sideways-lr' | 'sideways-rl' | 'vertical-lr' | 'vertical-rl';
export declare type ZIndexProperty = Globals | 'auto' | number;
export declare type ZoomProperty = Globals | 'normal' | 'reset' | string | number;
export declare type MozAppearanceProperty = Globals | '-moz-mac-unified-toolbar' | '-moz-win-borderless-glass' | '-moz-win-browsertabbar-toolbox' | '-moz-win-communications-toolbox' | '-moz-win-communicationstext' | '-moz-win-exclude-glass' | '-moz-win-glass' | '-moz-win-media-toolbox' | '-moz-win-mediatext' | '-moz-window-button-box' | '-moz-window-button-box-maximized' | '-moz-window-button-close' | '-moz-window-button-maximize' | '-moz-window-button-minimize' | '-moz-window-button-restore' | '-moz-window-frame-bottom' | '-moz-window-frame-left' | '-moz-window-frame-right' | '-moz-window-titlebar' | '-moz-window-titlebar-maximized' | 'button' | 'button-arrow-down' | 'button-arrow-next' | 'button-arrow-previous' | 'button-arrow-up' | 'button-bevel' | 'button-focus' | 'caret' | 'checkbox' | 'checkbox-container' | 'checkbox-label' | 'checkmenuitem' | 'dualbutton' | 'groupbox' | 'listbox' | 'listitem' | 'menuarrow' | 'menubar' | 'menucheckbox' | 'menuimage' | 'menuitem' | 'menuitemtext' | 'menulist' | 'menulist-button' | 'menulist-text' | 'menulist-textfield' | 'menupopup' | 'menuradio' | 'menuseparator' | 'meterbar' | 'meterchunk' | 'none' | 'progressbar' | 'progressbar-vertical' | 'progresschunk' | 'progresschunk-vertical' | 'radio' | 'radio-container' | 'radio-label' | 'radiomenuitem' | 'range' | 'range-thumb' | 'resizer' | 'resizerpanel' | 'scale-horizontal' | 'scale-vertical' | 'scalethumb-horizontal' | 'scalethumb-vertical' | 'scalethumbend' | 'scalethumbstart' | 'scalethumbtick' | 'scrollbarbutton-down' | 'scrollbarbutton-left' | 'scrollbarbutton-right' | 'scrollbarbutton-up' | 'scrollbarthumb-horizontal' | 'scrollbarthumb-vertical' | 'scrollbartrack-horizontal' | 'scrollbartrack-vertical' | 'searchfield' | 'separator' | 'sheet' | 'spinner' | 'spinner-downbutton' | 'spinner-textfield' | 'spinner-upbutton' | 'splitter' | 'statusbar' | 'statusbarpanel' | 'tab' | 'tab-scroll-arrow-back' | 'tab-scroll-arrow-forward' | 'tabpanel' | 'tabpanels' | 'textfield' | 'textfield-multiline' | 'toolbar' | 'toolbarbutton' | 'toolbarbutton-dropdown' | 'toolbargripper' | 'toolbox' | 'tooltip' | 'treeheader' | 'treeheadercell' | 'treeheadersortarrow' | 'treeitem' | 'treeline' | 'treetwisty' | 'treetwistyopen' | 'treeview';
export declare type MozBindingProperty = Globals | 'none' | string;
export declare type MozBorderBottomColorsProperty = Globals | Color | 'none' | string;
export declare type MozBorderLeftColorsProperty = Globals | Color | 'none' | string;
export declare type MozBorderRightColorsProperty = Globals | Color | 'none' | string;
export declare type MozBorderTopColorsProperty = Globals | Color | 'none' | string;
export declare type MozContextPropertiesProperty = Globals | 'fill' | 'fill-opacity' | 'none' | 'stroke' | 'stroke-opacity' | string;
export declare type MozFloatEdgeProperty = Globals | 'border-box' | 'content-box' | 'margin-box' | 'padding-box';
export declare type MozImageRegionProperty = Globals | 'auto' | string;
export declare type MozOrientProperty = Globals | 'block' | 'horizontal' | 'inline' | 'vertical';
export declare type MozOutlineRadiusProperty<TLength> = Globals | TLength | string;
export declare type MozOutlineRadiusBottomleftProperty<TLength> = Globals | TLength | string;
export declare type MozOutlineRadiusBottomrightProperty<TLength> = Globals | TLength | string;
export declare type MozOutlineRadiusTopleftProperty<TLength> = Globals | TLength | string;
export declare type MozOutlineRadiusToprightProperty<TLength> = Globals | TLength | string;
export declare type MozStackSizingProperty = Globals | 'ignore' | 'stretch-to-fit';
export declare type MozTextBlinkProperty = Globals | 'blink' | 'none';
export declare type MozUserFocusProperty = Globals | 'ignore' | 'none' | 'normal' | 'select-after' | 'select-all' | 'select-before' | 'select-menu' | 'select-same';
export declare type MozUserInputProperty = Globals | 'auto' | 'disabled' | 'enabled' | 'none';
export declare type MozUserModifyProperty = Globals | 'read-only' | 'read-write' | 'write-only';
export declare type MozWindowDraggingProperty = Globals | 'drag' | 'no-drag';
export declare type MozWindowShadowProperty = Globals | 'default' | 'menu' | 'none' | 'sheet' | 'tooltip';
export declare type MsAcceleratorProperty = Globals | 'false' | 'true';
export declare type MsBlockProgressionProperty = Globals | 'bt' | 'lr' | 'rl' | 'tb';
export declare type MsContentZoomChainingProperty = Globals | 'chained' | 'none';
export declare type MsContentZoomSnapProperty = Globals | 'mandatory' | 'none' | 'proximity' | string;
export declare type MsContentZoomSnapTypeProperty = Globals | 'mandatory' | 'none' | 'proximity';
export declare type MsContentZoomingProperty = Globals | 'none' | 'zoom';
export declare type MsFlowFromProperty = Globals | 'none' | string;
export declare type MsFlowIntoProperty = Globals | 'none' | string;
export declare type MsHighContrastAdjustProperty = Globals | 'auto' | 'none';
export declare type MsHyphenateLimitCharsProperty = Globals | 'auto' | string | number;
export declare type MsHyphenateLimitLinesProperty = Globals | 'no-limit' | number;
export declare type MsHyphenateLimitZoneProperty<TLength> = Globals | TLength | string;
export declare type MsImeAlignProperty = Globals | 'after' | 'auto';
export declare type MsOverflowStyleProperty = Globals | '-ms-autohiding-scrollbar' | 'auto' | 'none' | 'scrollbar';
export declare type MsScrollChainingProperty = Globals | 'chained' | 'none';
export declare type MsScrollLimitXMaxProperty<TLength> = Globals | TLength | 'auto';
export declare type MsScrollLimitXMinProperty<TLength> = Globals | TLength;
export declare type MsScrollLimitYMaxProperty<TLength> = Globals | TLength | 'auto';
export declare type MsScrollLimitYMinProperty<TLength> = Globals | TLength;
export declare type MsScrollRailsProperty = Globals | 'none' | 'railed';
export declare type MsScrollSnapTypeProperty = Globals | 'mandatory' | 'none' | 'proximity';
export declare type MsScrollTranslationProperty = Globals | 'none' | 'vertical-to-horizontal';
export declare type MsScrollbar3dlightColorProperty = Globals | Color;
export declare type MsScrollbarArrowColorProperty = Globals | Color;
export declare type MsScrollbarBaseColorProperty = Globals | Color;
export declare type MsScrollbarDarkshadowColorProperty = Globals | Color;
export declare type MsScrollbarFaceColorProperty = Globals | Color;
export declare type MsScrollbarHighlightColorProperty = Globals | Color;
export declare type MsScrollbarShadowColorProperty = Globals | Color;
export declare type MsScrollbarTrackColorProperty = Globals | Color;
export declare type MsTextAutospaceProperty = Globals | 'ideograph-alpha' | 'ideograph-numeric' | 'ideograph-parenthesis' | 'ideograph-space' | 'none';
export declare type MsTouchSelectProperty = Globals | 'grippers' | 'none';
export declare type MsUserSelectProperty = Globals | 'element' | 'none' | 'text';
export declare type MsWrapFlowProperty = Globals | 'auto' | 'both' | 'clear' | 'end' | 'maximum' | 'start';
export declare type MsWrapMarginProperty<TLength> = Globals | TLength;
export declare type MsWrapThroughProperty = Globals | 'none' | 'wrap';
export declare type WebkitAppearanceProperty = Globals | 'button' | 'button-bevel' | 'caret' | 'checkbox' | 'default-button' | 'inner-spin-button' | 'listbox' | 'listitem' | 'media-controls-background' | 'media-controls-fullscreen-background' | 'media-current-time-display' | 'media-enter-fullscreen-button' | 'media-exit-fullscreen-button' | 'media-fullscreen-button' | 'media-mute-button' | 'media-overlay-play-button' | 'media-play-button' | 'media-seek-back-button' | 'media-seek-forward-button' | 'media-slider' | 'media-sliderthumb' | 'media-time-remaining-display' | 'media-toggle-closed-captions-button' | 'media-volume-slider' | 'media-volume-slider-container' | 'media-volume-sliderthumb' | 'menulist' | 'menulist-button' | 'menulist-text' | 'menulist-textfield' | 'meter' | 'none' | 'progress-bar' | 'progress-bar-value' | 'push-button' | 'radio' | 'searchfield' | 'searchfield-cancel-button' | 'searchfield-decoration' | 'searchfield-results-button' | 'searchfield-results-decoration' | 'slider-horizontal' | 'slider-vertical' | 'sliderthumb-horizontal' | 'sliderthumb-vertical' | 'square-button' | 'textarea' | 'textfield';
export declare type WebkitBorderBeforeProperty<TLength> = Globals | LineWidth<TLength> | LineStyle | Color | string;
export declare type WebkitBorderBeforeColorProperty = Globals | Color;
export declare type WebkitBorderBeforeStyleProperty = Globals | LineStyle | string;
export declare type WebkitBorderBeforeWidthProperty<TLength> = Globals | LineWidth<TLength> | string;
export declare type WebkitBoxReflectProperty<TLength> = Globals | TLength | 'above' | 'below' | 'left' | 'right' | string;
export declare type WebkitLineClampProperty = Globals | 'none' | number;
export declare type WebkitMaskProperty<TLength> = Globals | Position<TLength> | RepeatStyle | Box | 'border' | 'content' | 'none' | 'padding' | 'text' | string;
export declare type WebkitMaskAttachmentProperty = Globals | Attachment | string;
export declare type WebkitMaskClipProperty = Globals | Box | 'border' | 'content' | 'padding' | 'text' | string;
export declare type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;
export declare type WebkitMaskImageProperty = Globals | 'none' | string;
export declare type WebkitMaskOriginProperty = Globals | Box | 'border' | 'content' | 'padding' | string;
export declare type WebkitMaskPositionProperty<TLength> = Globals | Position<TLength> | string;
export declare type WebkitMaskPositionXProperty<TLength> = Globals | TLength | 'center' | 'left' | 'right' | string;
export declare type WebkitMaskPositionYProperty<TLength> = Globals | TLength | 'bottom' | 'center' | 'top' | string;
export declare type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;
export declare type WebkitMaskRepeatXProperty = Globals | 'no-repeat' | 'repeat' | 'round' | 'space';
export declare type WebkitMaskRepeatYProperty = Globals | 'no-repeat' | 'repeat' | 'round' | 'space';
export declare type WebkitMaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;
export declare type WebkitOverflowScrollingProperty = Globals | 'auto' | 'touch';
export declare type WebkitTapHighlightColorProperty = Globals | Color;
export declare type WebkitTextFillColorProperty = Globals | Color;
export declare type WebkitTextStrokeProperty<TLength> = Globals | Color | TLength | string;
export declare type WebkitTextStrokeColorProperty = Globals | Color;
export declare type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;
export declare type WebkitTouchCalloutProperty = Globals | 'default' | 'none';
export declare type WebkitUserModifyProperty = Globals | 'read-only' | 'read-write' | 'read-write-plaintext-only';
export declare type AlignmentBaselineProperty = Globals | 'after-edge' | 'alphabetic' | 'auto' | 'baseline' | 'before-edge' | 'central' | 'hanging' | 'ideographic' | 'mathematical' | 'middle' | 'text-after-edge' | 'text-before-edge';
export declare type BaselineShiftProperty<TLength> = Globals | TLength | 'baseline' | 'sub' | 'super' | string;
export declare type ClipRuleProperty = Globals | 'evenodd' | 'nonzero';
export declare type ColorInterpolationProperty = Globals | 'auto' | 'linearRGB' | 'sRGB';
export declare type ColorRenderingProperty = Globals | 'auto' | 'optimizeQuality' | 'optimizeSpeed';
export declare type DominantBaselineProperty = Globals | 'alphabetic' | 'auto' | 'central' | 'hanging' | 'ideographic' | 'mathematical' | 'middle' | 'no-change' | 'reset-size' | 'text-after-edge' | 'text-before-edge' | 'use-script';
export declare type FillProperty = Globals | Paint;
export declare type FillRuleProperty = Globals | 'evenodd' | 'nonzero';
export declare type FloodColorProperty = Globals | Color | 'currentColor';
export declare type GlyphOrientationVerticalProperty = Globals | 'auto' | string | number;
export declare type LightingColorProperty = Globals | Color | 'currentColor';
export declare type MarkerProperty = Globals | 'none' | string;
export declare type MarkerEndProperty = Globals | 'none' | string;
export declare type MarkerMidProperty = Globals | 'none' | string;
export declare type MarkerStartProperty = Globals | 'none' | string;
export declare type ShapeRenderingProperty = Globals | 'auto' | 'crispEdges' | 'geometricPrecision' | 'optimizeSpeed';
export declare type StopColorProperty = Globals | Color | 'currentColor';
export declare type StrokeProperty = Globals | Paint;
export declare type StrokeDasharrayProperty<TLength> = Globals | Dasharray<TLength> | 'none';
export declare type StrokeDashoffsetProperty<TLength> = Globals | TLength | string;
export declare type StrokeLinecapProperty = Globals | 'butt' | 'round' | 'square';
export declare type StrokeLinejoinProperty = Globals | 'bevel' | 'miter' | 'round';
export declare type StrokeWidthProperty<TLength> = Globals | TLength | string;
export declare type TextAnchorProperty = Globals | 'end' | 'middle' | 'start';
export declare type VectorEffectProperty = Globals | 'non-scaling-stroke' | 'none';
declare type CounterStyleRangeProperty = 'auto' | 'infinite' | string | number;
declare type CounterStyleSpeakAsProperty = 'auto' | 'bullets' | 'numbers' | 'spell-out' | 'words' | string;
declare type CounterStyleSystemProperty = 'additive' | 'alphabetic' | 'cyclic' | 'fixed' | 'numeric' | 'symbolic' | string;
declare type FontFaceFontFeatureSettingsProperty = 'normal' | string;
declare type FontFaceFontDisplayProperty = 'auto' | 'block' | 'fallback' | 'optional' | 'swap';
declare type FontFaceFontStretchProperty = FontStretchAbsolute | string;
declare type FontFaceFontStyleProperty = 'italic' | 'normal' | 'oblique' | string;
declare type FontFaceFontVariantProperty = EastAsianVariantValues | 'all-petite-caps' | 'all-small-caps' | 'common-ligatures' | 'contextual' | 'diagonal-fractions' | 'discretionary-ligatures' | 'full-width' | 'historical-forms' | 'historical-ligatures' | 'lining-nums' | 'no-common-ligatures' | 'no-contextual' | 'no-discretionary-ligatures' | 'no-historical-ligatures' | 'none' | 'normal' | 'oldstyle-nums' | 'ordinal' | 'petite-caps' | 'proportional-nums' | 'proportional-width' | 'ruby' | 'slashed-zero' | 'small-caps' | 'stacked-fractions' | 'tabular-nums' | 'titling-caps' | 'unicase' | string;
declare type FontFaceFontVariationSettingsProperty = 'normal' | string;
declare type FontFaceFontWeightProperty = FontWeightAbsolute | string;
declare type PageBleedProperty<TLength> = TLength | 'auto';
declare type PageMarksProperty = 'crop' | 'cross' | 'none' | string;
declare type ViewportHeightProperty<TLength> = ViewportLength<TLength> | string;
declare type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;
declare type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;
declare type ViewportMaxZoomProperty = 'auto' | string | number;
declare type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;
declare type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;
declare type ViewportMinZoomProperty = 'auto' | string | number;
declare type ViewportOrientationProperty = 'auto' | 'landscape' | 'portrait';
declare type ViewportUserZoomProperty = '-ms-zoom' | 'fixed' | 'zoom';
declare type ViewportWidthProperty<TLength> = ViewportLength<TLength> | string;
declare type ViewportZoomProperty = 'auto' | string | number;
declare type AbsoluteSize = 'large' | 'medium' | 'small' | 'x-large' | 'x-small' | 'xx-large' | 'xx-small';
declare type AnimateableFeature = 'contents' | 'scroll-position' | string;
declare type Attachment = 'fixed' | 'local' | 'scroll';
declare type BgPosition<TLength> = TLength | 'bottom' | 'center' | 'left' | 'right' | 'top' | string;
declare type BgSize<TLength> = TLength | 'auto' | 'contain' | 'cover' | string;
declare type BlendMode = 'color' | 'color-burn' | 'color-dodge' | 'darken' | 'difference' | 'exclusion' | 'hard-light' | 'hue' | 'lighten' | 'luminosity' | 'multiply' | 'normal' | 'overlay' | 'saturation' | 'screen' | 'soft-light';
declare type Box = 'border-box' | 'content-box' | 'padding-box';
declare type Color = NamedColor | DeprecatedSystemColor | 'currentcolor' | string;
declare type CompositeStyle = 'clear' | 'copy' | 'destination-atop' | 'destination-in' | 'destination-out' | 'destination-over' | 'source-atop' | 'source-in' | 'source-out' | 'source-over' | 'xor';
declare type CompositingOperator = 'add' | 'exclude' | 'intersect' | 'subtract';
declare type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
declare type ContentList = Quote | 'contents' | string;
declare type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';
declare type CubicBezierTimingFunction = 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | string;
declare type Dasharray<TLength> = TLength | string | number;
declare type DeprecatedSystemColor = 'ActiveBorder' | 'ActiveCaption' | 'AppWorkspace' | 'Background' | 'ButtonFace' | 'ButtonHighlight' | 'ButtonShadow' | 'ButtonText' | 'CaptionText' | 'GrayText' | 'Highlight' | 'HighlightText' | 'InactiveBorder' | 'InactiveCaption' | 'InactiveCaptionText' | 'InfoBackground' | 'InfoText' | 'Menu' | 'MenuText' | 'Scrollbar' | 'ThreeDDarkShadow' | 'ThreeDFace' | 'ThreeDHighlight' | 'ThreeDLightShadow' | 'ThreeDShadow' | 'Window' | 'WindowFrame' | 'WindowText';
declare type DisplayInside = '-ms-flexbox' | '-ms-grid' | '-webkit-flex' | 'flex' | 'flow' | 'flow-root' | 'grid' | 'ruby' | 'table';
declare type DisplayInternal = 'ruby-base' | 'ruby-base-container' | 'ruby-text' | 'ruby-text-container' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group';
declare type DisplayLegacy = '-ms-inline-flexbox' | '-ms-inline-grid' | '-webkit-inline-flex' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'inline-list-item' | 'inline-table';
declare type DisplayOutside = 'block' | 'inline' | 'run-in';
declare type EastAsianVariantValues = 'jis04' | 'jis78' | 'jis83' | 'jis90' | 'simplified' | 'traditional';
declare type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | 'none' | string;
declare type FontStretchAbsolute = 'condensed' | 'expanded' | 'extra-condensed' | 'extra-expanded' | 'normal' | 'semi-condensed' | 'semi-expanded' | 'ultra-condensed' | 'ultra-expanded' | string;
declare type FontWeightAbsolute = 'bold' | 'normal' | number;
declare type GenericFamily = 'cursive' | 'fantasy' | 'monospace' | 'sans-serif' | 'serif';
declare type GeometryBox = Box | 'fill-box' | 'margin-box' | 'stroke-box' | 'view-box';
declare type GridLine = 'auto' | string | number;
declare type LineStyle = 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'inset' | 'none' | 'outset' | 'ridge' | 'solid';
declare type LineWidth<TLength> = TLength | 'medium' | 'thick' | 'thin';
declare type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | 'no-clip' | 'none' | string;
declare type MaskingMode = 'alpha' | 'luminance' | 'match-source';
declare type NamedColor = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'transparent' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
declare type Paint = Color | 'child' | 'context-fill' | 'context-stroke' | 'none' | string;
declare type Position<TLength> = TLength | 'bottom' | 'center' | 'left' | 'right' | 'top' | string;
declare type Quote = 'close-quote' | 'no-close-quote' | 'no-open-quote' | 'open-quote';
declare type RepeatStyle = 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space' | string;
declare type SelfPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' | 'self-start' | 'start';
declare type SingleAnimation = SingleTimingFunction | SingleAnimationDirection | SingleAnimationFillMode | 'infinite' | 'none' | 'paused' | 'running' | string | number;
declare type SingleAnimationDirection = 'alternate' | 'alternate-reverse' | 'normal' | 'reverse';
declare type SingleAnimationFillMode = 'backwards' | 'both' | 'forwards' | 'none';
declare type SingleTimingFunction = CubicBezierTimingFunction | StepTimingFunction | 'linear' | string;
declare type SingleTransition = SingleTimingFunction | 'all' | 'none' | string;
declare type StepTimingFunction = 'step-end' | 'step-start' | string;
declare type TrackBreadth<TLength> = TLength | 'auto' | 'max-content' | 'min-content' | string;
declare type ViewportLength<TLength> = TLength | 'auto' | string;
export {};






export interface AbstractCoreEvent {
}
export interface AbstractCoreAnimationEvent extends Event {
}
export interface AbstractCoreClipboardEvent extends Event {
}
export interface AbstractCoreCompositionEvent extends Event {
}
export interface AbstractCoreDragEvent extends Event {
}
export interface AbstractCoreFocusEvent extends Event {
}
export interface AbstractCoreKeyboardEvent extends Event {
}
export interface AbstractCoreMouseEvent extends Event {
}
export interface AbstractCoreTouchEvent extends Event {
}
export interface AbstractCorePointerEvent extends Event {
}
export interface AbstractCoreTransitionEvent extends Event {
}
export interface AbstractCoreUIEvent extends Event {
}
export interface AbstractCoreWheelEvent extends Event {
}
export interface EventTarget {
}
export interface Document {
}
export interface DataTransfer {
}
export interface StyleMedia {
}
export interface Element {
}
export interface HTMLWebViewElement extends HTMLElement {
}
export interface Text {
}
export interface TouchList {
}
export interface WebGLRenderingContext {
}
declare type NativeAnimationEvent = AbstractCoreAnimationEvent;
declare type NativeClipboardEvent = AbstractCoreClipboardEvent;
declare type NativeCompositionEvent = AbstractCoreCompositionEvent;
declare type NativeDragEvent = AbstractCoreDragEvent;
declare type NativeFocusEvent = AbstractCoreFocusEvent;
declare type NativeKeyboardEvent = AbstractCoreKeyboardEvent;
declare type NativeMouseEvent = AbstractCoreMouseEvent;
declare type NativeTouchEvent = AbstractCoreTouchEvent;
declare type NativePointerEvent = AbstractCorePointerEvent;
declare type NativeTransitionEvent = AbstractCoreTransitionEvent;
declare type NativeUIEvent = AbstractCoreUIEvent;
declare type NativeWheelEvent = AbstractCoreWheelEvent;
declare type ReactType<P = any> = {
    [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never;
}[keyof JSX.IntrinsicElements] | ComponentType<P>;
declare type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
declare type Key = string | number;
export interface RefObject<T> {
    readonly current: T | null;
}
declare type Ref<T> = {
    bivarianceHack(instance: T | null): void;
}['bivarianceHack'] | RefObject<T> | null;
declare type LegacyRef<T> = string | Ref<T>;
declare type ComponentState = any;
export interface Attributes {
    key?: Key;
}
export interface RefAttributes<T> extends Attributes {
    ref?: Ref<T>;
}
export interface ClassAttributes<T> extends Attributes {
    ref?: LegacyRef<T>;
}
export interface ReactElement<P> {
    type: string | ComponentClass<P> | FunctionComponent<P>;
    props: P;
    key: Key | null;
}
export interface FunctionComponentElement<P> extends ReactElement<P> {
    type: FunctionComponent<P>;
    ref?: 'ref' extends keyof P ? P extends {
        ref?: infer R;
    } ? R : never : never;
}
export interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P> {
    type: ComponentClass<P>;
    ref?: LegacyRef<T>;
}
export interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element> extends ReactElement<P> {
    type: string;
    ref: LegacyRef<T>;
}
export interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {
}
export interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
    type: keyof ReactHTML;
}
export interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
    type: keyof ReactSVG;
}
export interface ReactPortal extends ReactElement<any> {
    key: Key | null;
    children: ReactNode;
}
declare type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (props?: (ClassAttributes<T> & P) | null, ...children: ReactNode[]) => DOMElement<P, T>;
export interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {
}
export interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
    (props?: (ClassAttributes<T> & P) | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
}
export interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
    (props?: (ClassAttributes<SVGElement> & SVGAttributes<SVGElement>) | null, ...children: ReactNode[]): ReactSVGElement;
}
declare type ReactText = string | number;
declare type ReactChild = ReactElement<any> | ReactText;
export interface ReactNodeArray extends Array<ReactNode> {
}
export declare type ReactFragment = {} | ReactNodeArray;
export declare type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
export interface ProviderProps<T> {
    value: T;
    children?: ReactNode;
}
export interface ConsumerProps<T> {
    children: (value: T) => ReactNode;
    unstable_observedBits?: number;
}
export interface ExoticComponent<P = {}> {
    (props: P): (ReactElement<any> | null);
    readonly $$typeof: symbol;
}
export interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
    displayName?: string;
}
export interface ProviderExoticComponent<P> extends ExoticComponent<P> {
    propTypes?: WeakValidationMap<P>;
}
declare type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
declare type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
export interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string;
}
export interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {
}
export interface PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
}
export interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
    replaceState(nextState: S, callback?: () => void): void;
    isMounted(): boolean;
    getInitialState?(): S;
}
export interface ChildContextProvider<CC> {
    getChildContext(): CC;
}
export interface FunctionComponent<P = {}> {
    (props: P & {
        children?: ReactNode;
    }, context?: any): ReactElement<any> | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}
export interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
    new (props: P, context?: any): Component<P, S>;
    propTypes?: WeakValidationMap<P>;
    contextType?: Context<any>;
    contextTypes?: ValidationMap<any>;
    childContextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}
export interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
}
export interface StaticLifecycle<P, S> {
    getDerivedStateFromProps?: GetDerivedStateFromProps<P, S>;
    getDerivedStateFromError?: GetDerivedStateFromError<P, S>;
}
declare type GetDerivedStateFromProps<P, S> = (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;
declare type GetDerivedStateFromError<P, S> = (error: any) => Partial<S> | null;
export interface NewLifecycle<P, S, SS> {
    getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
    componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
}
export interface DeprecatedLifecycle<P, S> {
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
}
export interface Mixin<P, S> extends ComponentLifecycle<P, S> {
    mixins?: Array<Mixin<P, S>>;
    statics?: {
        [key: string]: any;
    };
    displayName?: string;
    propTypes?: ValidationMap<any>;
    contextTypes?: ValidationMap<any>;
    childContextTypes?: ValidationMap<any>;
    getDefaultProps?(): P;
    getInitialState?(): S;
}
export interface ComponentSpec<P, S> extends Mixin<P, S> {
    render(): ReactNode;
    [propertyName: string]: any;
}
export interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
    defaultProps?: Partial<P>;
}
declare type PropsWithoutRef<P> = 'ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P;
declare type PropsWithRef<P> = 'ref' extends keyof P ? P extends {
    ref?: infer R;
} ? string extends R ? PropsWithoutRef<P> & {
    ref?: Exclude<R, string>;
} : P : P : P;
declare type ComponentProps<T extends ReactType> = T extends ComponentType<infer P> ? P : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : {};
declare type ComponentPropsWithRef<T extends ReactType> = T extends ComponentClass<infer P> ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>> : PropsWithRef<ComponentProps<T>>;
export interface MemoExoticComponent<T extends ComponentType<any>> extends NamedExoticComponent<ComponentPropsWithRef<T>> {
    readonly type: T;
}
export interface LazyExoticComponent<T extends ComponentType<any>> extends ExoticComponent<ComponentPropsWithRef<T>> {
    readonly _result: T;
}
export interface MutableRefObject<T> {
    current: T;
}
export interface BaseSyntheticEvent<E = object, C = any, T = any> {
    nativeEvent: E;
    currentTarget: C;
    target: T;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
}
export interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {
}
export interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
    clipboardData: DataTransfer;
}
export interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
    data: string;
}
export interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
    dataTransfer: DataTransfer;
}
export interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
    pointerId: number;
    pressure: number;
    tiltX: number;
    tiltY: number;
    width: number;
    height: number;
    pointerType: 'mouse' | 'pen' | 'touch';
    isPrimary: boolean;
}
export interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
    relatedTarget: EventTarget;
    target: EventTarget & T;
}
export interface FormEvent<T = Element> extends SyntheticEvent<T> {
}
export interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}
export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}
export interface KeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> {
    altKey: boolean;
    charCode: number;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    key: string;
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    which: number;
}
export interface MouseEvent<T = Element, E = NativeMouseEvent> extends SyntheticEvent<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}
export interface TouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}
export interface UIEvent<T = Element> extends SyntheticEvent<T, NativeUIEvent> {
    detail: number;
    view: AbstractView;
}
export interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}
export interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
}
export interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
    elapsedTime: number;
    propertyName: string;
    pseudoElement: string;
}
declare type EventHandler<E extends SyntheticEvent<any>> = {
    bivarianceHack(event: E): void;
}['bivarianceHack'];
declare type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;
declare type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
declare type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
declare type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
declare type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
declare type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
declare type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
declare type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
declare type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
declare type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
declare type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
declare type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
declare type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
declare type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
declare type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;
export interface Props<T> {
    children?: ReactNode;
    key?: Key;
    ref?: LegacyRef<T>;
}
export interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
}
declare type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;
export interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
}
export interface DOMAttributes<T> {
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: ClipboardEventHandler<T>;
    onCopyCapture?: ClipboardEventHandler<T>;
    onCut?: ClipboardEventHandler<T>;
    onCutCapture?: ClipboardEventHandler<T>;
    onPaste?: ClipboardEventHandler<T>;
    onPasteCapture?: ClipboardEventHandler<T>;
    onCompositionEnd?: CompositionEventHandler<T>;
    onCompositionEndCapture?: CompositionEventHandler<T>;
    onCompositionStart?: CompositionEventHandler<T>;
    onCompositionStartCapture?: CompositionEventHandler<T>;
    onCompositionUpdate?: CompositionEventHandler<T>;
    onCompositionUpdateCapture?: CompositionEventHandler<T>;
    onFocus?: FocusEventHandler<T>;
    onFocusCapture?: FocusEventHandler<T>;
    onBlur?: FocusEventHandler<T>;
    onBlurCapture?: FocusEventHandler<T>;
    onChange?: FormEventHandler<T>;
    onChangeCapture?: FormEventHandler<T>;
    onBeforeInput?: FormEventHandler<T>;
    onBeforeInputCapture?: FormEventHandler<T>;
    onInput?: FormEventHandler<T>;
    onInputCapture?: FormEventHandler<T>;
    onReset?: FormEventHandler<T>;
    onResetCapture?: FormEventHandler<T>;
    onSubmit?: FormEventHandler<T>;
    onSubmitCapture?: FormEventHandler<T>;
    onInvalid?: FormEventHandler<T>;
    onInvalidCapture?: FormEventHandler<T>;
    onLoad?: ReactEventHandler<T>;
    onLoadCapture?: ReactEventHandler<T>;
    onError?: ReactEventHandler<T>;
    onErrorCapture?: ReactEventHandler<T>;
    onKeyDown?: KeyboardEventHandler<T>;
    onKeyDownCapture?: KeyboardEventHandler<T>;
    onKeyPress?: KeyboardEventHandler<T>;
    onKeyPressCapture?: KeyboardEventHandler<T>;
    onKeyUp?: KeyboardEventHandler<T>;
    onKeyUpCapture?: KeyboardEventHandler<T>;
    onAbort?: ReactEventHandler<T>;
    onAbortCapture?: ReactEventHandler<T>;
    onCanPlay?: ReactEventHandler<T>;
    onCanPlayCapture?: ReactEventHandler<T>;
    onCanPlayThrough?: ReactEventHandler<T>;
    onCanPlayThroughCapture?: ReactEventHandler<T>;
    onDurationChange?: ReactEventHandler<T>;
    onDurationChangeCapture?: ReactEventHandler<T>;
    onEmptied?: ReactEventHandler<T>;
    onEmptiedCapture?: ReactEventHandler<T>;
    onEncrypted?: ReactEventHandler<T>;
    onEncryptedCapture?: ReactEventHandler<T>;
    onEnded?: ReactEventHandler<T>;
    onEndedCapture?: ReactEventHandler<T>;
    onLoadedData?: ReactEventHandler<T>;
    onLoadedDataCapture?: ReactEventHandler<T>;
    onLoadedMetadata?: ReactEventHandler<T>;
    onLoadedMetadataCapture?: ReactEventHandler<T>;
    onLoadStart?: ReactEventHandler<T>;
    onLoadStartCapture?: ReactEventHandler<T>;
    onPause?: ReactEventHandler<T>;
    onPauseCapture?: ReactEventHandler<T>;
    onPlay?: ReactEventHandler<T>;
    onPlayCapture?: ReactEventHandler<T>;
    onPlaying?: ReactEventHandler<T>;
    onPlayingCapture?: ReactEventHandler<T>;
    onProgress?: ReactEventHandler<T>;
    onProgressCapture?: ReactEventHandler<T>;
    onRateChange?: ReactEventHandler<T>;
    onRateChangeCapture?: ReactEventHandler<T>;
    onSeeked?: ReactEventHandler<T>;
    onSeekedCapture?: ReactEventHandler<T>;
    onSeeking?: ReactEventHandler<T>;
    onSeekingCapture?: ReactEventHandler<T>;
    onStalled?: ReactEventHandler<T>;
    onStalledCapture?: ReactEventHandler<T>;
    onSuspend?: ReactEventHandler<T>;
    onSuspendCapture?: ReactEventHandler<T>;
    onTimeUpdate?: ReactEventHandler<T>;
    onTimeUpdateCapture?: ReactEventHandler<T>;
    onVolumeChange?: ReactEventHandler<T>;
    onVolumeChangeCapture?: ReactEventHandler<T>;
    onWaiting?: ReactEventHandler<T>;
    onWaitingCapture?: ReactEventHandler<T>;
    onClick?: MouseEventHandler<T>;
    onClickCapture?: MouseEventHandler<T>;
    onContextMenu?: MouseEventHandler<T>;
    onContextMenuCapture?: MouseEventHandler<T>;
    onDoubleClick?: MouseEventHandler<T>;
    onDoubleClickCapture?: MouseEventHandler<T>;
    onDrag?: DragEventHandler<T>;
    onDragCapture?: DragEventHandler<T>;
    onDragEnd?: DragEventHandler<T>;
    onDragEndCapture?: DragEventHandler<T>;
    onDragEnter?: DragEventHandler<T>;
    onDragEnterCapture?: DragEventHandler<T>;
    onDragExit?: DragEventHandler<T>;
    onDragExitCapture?: DragEventHandler<T>;
    onDragLeave?: DragEventHandler<T>;
    onDragLeaveCapture?: DragEventHandler<T>;
    onDragOver?: DragEventHandler<T>;
    onDragOverCapture?: DragEventHandler<T>;
    onDragStart?: DragEventHandler<T>;
    onDragStartCapture?: DragEventHandler<T>;
    onDrop?: DragEventHandler<T>;
    onDropCapture?: DragEventHandler<T>;
    onMouseDown?: MouseEventHandler<T>;
    onMouseDownCapture?: MouseEventHandler<T>;
    onMouseEnter?: MouseEventHandler<T>;
    onMouseLeave?: MouseEventHandler<T>;
    onMouseMove?: MouseEventHandler<T>;
    onMouseMoveCapture?: MouseEventHandler<T>;
    onMouseOut?: MouseEventHandler<T>;
    onMouseOutCapture?: MouseEventHandler<T>;
    onMouseOver?: MouseEventHandler<T>;
    onMouseOverCapture?: MouseEventHandler<T>;
    onMouseUp?: MouseEventHandler<T>;
    onMouseUpCapture?: MouseEventHandler<T>;
    onSelect?: ReactEventHandler<T>;
    onSelectCapture?: ReactEventHandler<T>;
    onTouchCancel?: TouchEventHandler<T>;
    onTouchCancelCapture?: TouchEventHandler<T>;
    onTouchEnd?: TouchEventHandler<T>;
    onTouchEndCapture?: TouchEventHandler<T>;
    onTouchMove?: TouchEventHandler<T>;
    onTouchMoveCapture?: TouchEventHandler<T>;
    onTouchStart?: TouchEventHandler<T>;
    onTouchStartCapture?: TouchEventHandler<T>;
    onPointerDown?: PointerEventHandler<T>;
    onPointerDownCapture?: PointerEventHandler<T>;
    onPointerMove?: PointerEventHandler<T>;
    onPointerMoveCapture?: PointerEventHandler<T>;
    onPointerUp?: PointerEventHandler<T>;
    onPointerUpCapture?: PointerEventHandler<T>;
    onPointerCancel?: PointerEventHandler<T>;
    onPointerCancelCapture?: PointerEventHandler<T>;
    onPointerEnter?: PointerEventHandler<T>;
    onPointerEnterCapture?: PointerEventHandler<T>;
    onPointerLeave?: PointerEventHandler<T>;
    onPointerLeaveCapture?: PointerEventHandler<T>;
    onPointerOver?: PointerEventHandler<T>;
    onPointerOverCapture?: PointerEventHandler<T>;
    onPointerOut?: PointerEventHandler<T>;
    onPointerOutCapture?: PointerEventHandler<T>;
    onGotPointerCapture?: PointerEventHandler<T>;
    onGotPointerCaptureCapture?: PointerEventHandler<T>;
    onLostPointerCapture?: PointerEventHandler<T>;
    onLostPointerCaptureCapture?: PointerEventHandler<T>;
    onScroll?: UIEventHandler<T>;
    onScrollCapture?: UIEventHandler<T>;
    onWheel?: WheelEventHandler<T>;
    onWheelCapture?: WheelEventHandler<T>;
    onAnimationStart?: AnimationEventHandler<T>;
    onAnimationStartCapture?: AnimationEventHandler<T>;
    onAnimationEnd?: AnimationEventHandler<T>;
    onAnimationEndCapture?: AnimationEventHandler<T>;
    onAnimationIteration?: AnimationEventHandler<T>;
    onAnimationIterationCapture?: AnimationEventHandler<T>;
    onTransitionEnd?: TransitionEventHandler<T>;
    onTransitionEndCapture?: TransitionEventHandler<T>;
}
export interface CSSProperties extends Properties<string | number> {
}
export interface HTMLAttributes<T> extends DOMAttributes<T> {
    defaultChecked?: boolean;
    defaultValue?: string | string[];
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    accessKey?: string;
    className?: string;
    contentEditable?: boolean;
    contextMenu?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    id?: string;
    lang?: string;
    placeholder?: string;
    slot?: string;
    spellCheck?: boolean;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;
    inputMode?: string;
    is?: string;
    radioGroup?: string;
    role?: string;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: 'on' | 'off';
}
export interface HTMLAttributes<T> extends DOMAttributes<T> {
    'aria-activedescendant'?: string;
    'aria-atomic'?: boolean | 'false' | 'true';
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-busy'?: boolean | 'false' | 'true';
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean | 'false' | 'true';
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
    'aria-errormessage'?: string;
    'aria-expanded'?: boolean | 'false' | 'true';
    'aria-flowto'?: string;
    'aria-grabbed'?: boolean | 'false' | 'true';
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    'aria-hidden'?: boolean | 'false' | 'true';
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    'aria-keyshortcuts'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: 'off' | 'assertive' | 'polite';
    'aria-modal'?: boolean | 'false' | 'true';
    'aria-multiline'?: boolean | 'false' | 'true';
    'aria-multiselectable'?: boolean | 'false' | 'true';
    'aria-orientation'?: 'horizontal' | 'vertical';
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
    'aria-readonly'?: boolean | 'false' | 'true';
    'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
    'aria-required'?: boolean | 'false' | 'true';
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: boolean | 'false' | 'true';
    'aria-setsize'?: number;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;
}
export interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string;
    acceptCharset?: string;
    action?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    alt?: string;
    as?: string;
    async?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    autoPlay?: boolean;
    capture?: boolean | string;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    charSet?: string;
    challenge?: string;
    checked?: boolean;
    cite?: string;
    classID?: string;
    cols?: number;
    colSpan?: number;
    content?: string;
    controls?: boolean;
    coords?: string;
    crossOrigin?: string;
    data?: string;
    dateTime?: string;
    default?: boolean;
    defer?: boolean;
    disabled?: boolean;
    download?: any;
    encType?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    frameBorder?: number | string;
    headers?: string;
    height?: number | string;
    high?: number;
    href?: string;
    hrefLang?: string;
    htmlFor?: string;
    httpEquiv?: string;
    integrity?: string;
    keyParams?: string;
    keyType?: string;
    kind?: string;
    label?: string;
    list?: string;
    loop?: boolean;
    low?: number;
    manifest?: string;
    marginHeight?: number;
    marginWidth?: number;
    max?: number | string;
    maxLength?: number;
    media?: string;
    mediaGroup?: string;
    method?: string;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    muted?: boolean;
    name?: string;
    nonce?: string;
    noValidate?: boolean;
    open?: boolean;
    optimum?: number;
    pattern?: string;
    placeholder?: string;
    playsInline?: boolean;
    poster?: string;
    preload?: string;
    readOnly?: boolean;
    rel?: string;
    required?: boolean;
    reversed?: boolean;
    rows?: number;
    rowSpan?: number;
    sandbox?: string;
    scope?: string;
    scoped?: boolean;
    scrolling?: string;
    seamless?: boolean;
    selected?: boolean;
    shape?: string;
    size?: number;
    sizes?: string;
    span?: number;
    src?: string;
    srcDoc?: string;
    srcLang?: string;
    srcSet?: string;
    start?: number;
    step?: number | string;
    summary?: string;
    target?: string;
    type?: string;
    useMap?: string;
    value?: string | string[] | number;
    width?: number | string;
    wmode?: string;
    wrap?: string;
}
export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    type?: string;
}
export interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {
}
export interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
    coords?: string;
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    shape?: string;
    target?: string;
}
export interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string;
    target?: string;
}
export interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
}
export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: string;
    value?: string | string[] | number;
}
export interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string;
    width?: number | string;
}
export interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number;
    width?: number | string;
}
export interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number;
}
export interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: boolean;
}
export interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
    dateTime?: string;
}
export interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: boolean;
}
export interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
}
export interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    form?: string;
    name?: string;
}
export interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: string;
    action?: string;
    autoComplete?: string;
    encType?: string;
    method?: string;
    name?: string;
    noValidate?: boolean;
    target?: string;
}
export interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    manifest?: string;
}
export interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    frameBorder?: number | string;
    height?: number | string;
    marginHeight?: number;
    marginWidth?: number;
    name?: string;
    sandbox?: string;
    scrolling?: string;
    seamless?: boolean;
    src?: string;
    srcDoc?: string;
    width?: number | string;
}
export interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
    crossOrigin?: 'anonymous' | 'use-credentials' | '';
    decoding?: 'async' | 'auto' | 'sync';
    height?: number | string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    useMap?: string;
    width?: number | string;
}
export interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
    dateTime?: string;
}
export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | string;
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | string[] | number;
    width?: number | string;
    onChange?: ChangeEventHandler<T>;
}
export interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keyType?: string;
    keyParams?: string;
    name?: string;
}
export interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
}
export interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | string[] | number;
}
export interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: string;
    crossOrigin?: string;
    href?: string;
    hrefLang?: string;
    integrity?: string;
    media?: string;
    rel?: string;
    sizes?: string;
    type?: string;
}
export interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string;
}
export interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: string;
}
export interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoPlay?: boolean;
    controls?: boolean;
    controlsList?: string;
    crossOrigin?: string;
    loop?: boolean;
    mediaGroup?: string;
    muted?: boolean;
    playsinline?: boolean;
    preload?: string;
    src?: string;
}
export interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charSet?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
}
export interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    high?: number;
    low?: number;
    max?: number | string;
    min?: number | string;
    optimum?: number;
    value?: string | string[] | number;
}
export interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
}
export interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
    classID?: string;
    data?: string;
    form?: string;
    height?: number | string;
    name?: string;
    type?: string;
    useMap?: string;
    width?: number | string;
    wmode?: string;
}
export interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    reversed?: boolean;
    start?: number;
    type?: '1' | 'a' | 'A' | 'i' | 'I';
}
export interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
}
export interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | string[] | number;
}
export interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
    name?: string;
}
export interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string;
    value?: string | string[] | number;
}
export interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
    max?: number | string;
    value?: string | string[] | number;
}
export interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    async?: boolean;
    charSet?: string;
    crossOrigin?: string;
    defer?: boolean;
    integrity?: string;
    noModule?: boolean;
    nonce?: string;
    src?: string;
    type?: string;
}
export interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    value?: string | string[] | number;
    onChange?: ChangeEventHandler<T>;
}
export interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    type?: string;
}
export interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string;
    nonce?: string;
    scoped?: boolean;
    type?: string;
}
export interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
    cellPadding?: number | string;
    cellSpacing?: number | string;
    summary?: string;
}
export interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    cols?: number;
    dirName?: string;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string | string[] | number;
    wrap?: string;
    onChange?: ChangeEventHandler<T>;
}
export interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
    align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    colSpan?: number;
    headers?: string;
    rowSpan?: number;
    scope?: string;
}
export interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
    align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    colSpan?: number;
    headers?: string;
    rowSpan?: number;
    scope?: string;
}
export interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
    dateTime?: string;
}
export interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
    default?: boolean;
    kind?: string;
    label?: string;
    src?: string;
    srcLang?: string;
}
export interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    height?: number | string;
    playsInline?: boolean;
    poster?: string;
    width?: number | string;
}
export interface SVGAttributes<T> extends DOMAttributes<T> {
    className?: string;
    color?: string;
    height?: number | string;
    id?: string;
    lang?: string;
    max?: number | string;
    media?: string;
    method?: string;
    min?: number | string;
    name?: string;
    style?: CSSProperties;
    target?: string;
    type?: string;
    width?: number | string;
    role?: string;
    tabIndex?: number;
    accentHeight?: number | string;
    accumulate?: 'none' | 'sum';
    additive?: 'replace' | 'sum';
    alignmentBaseline?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit';
    allowReorder?: 'no' | 'yes';
    alphabetic?: number | string;
    amplitude?: number | string;
    arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated';
    ascent?: number | string;
    attributeName?: string;
    attributeType?: string;
    autoReverse?: number | string;
    azimuth?: number | string;
    baseFrequency?: number | string;
    baselineShift?: number | string;
    baseProfile?: number | string;
    bbox?: number | string;
    begin?: number | string;
    bias?: number | string;
    by?: number | string;
    calcMode?: number | string;
    capHeight?: number | string;
    clip?: number | string;
    clipPath?: string;
    clipPathUnits?: number | string;
    clipRule?: number | string;
    colorInterpolation?: number | string;
    colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
    colorProfile?: number | string;
    colorRendering?: number | string;
    contentScriptType?: number | string;
    contentStyleType?: number | string;
    cursor?: number | string;
    cx?: number | string;
    cy?: number | string;
    d?: string;
    decelerate?: number | string;
    descent?: number | string;
    diffuseConstant?: number | string;
    direction?: number | string;
    display?: number | string;
    divisor?: number | string;
    dominantBaseline?: number | string;
    dur?: number | string;
    dx?: number | string;
    dy?: number | string;
    edgeMode?: number | string;
    elevation?: number | string;
    enableBackground?: number | string;
    end?: number | string;
    exponent?: number | string;
    externalResourcesRequired?: number | string;
    fill?: string;
    fillOpacity?: number | string;
    fillRule?: 'nonzero' | 'evenodd' | 'inherit';
    filter?: string;
    filterRes?: number | string;
    filterUnits?: number | string;
    floodColor?: number | string;
    floodOpacity?: number | string;
    focusable?: number | string;
    fontFamily?: string;
    fontSize?: number | string;
    fontSizeAdjust?: number | string;
    fontStretch?: number | string;
    fontStyle?: number | string;
    fontVariant?: number | string;
    fontWeight?: number | string;
    format?: number | string;
    from?: number | string;
    fx?: number | string;
    fy?: number | string;
    g1?: number | string;
    g2?: number | string;
    glyphName?: number | string;
    glyphOrientationHorizontal?: number | string;
    glyphOrientationVertical?: number | string;
    glyphRef?: number | string;
    gradientTransform?: string;
    gradientUnits?: string;
    hanging?: number | string;
    horizAdvX?: number | string;
    horizOriginX?: number | string;
    href?: string;
    ideographic?: number | string;
    imageRendering?: number | string;
    in2?: number | string;
    in?: string;
    intercept?: number | string;
    k1?: number | string;
    k2?: number | string;
    k3?: number | string;
    k4?: number | string;
    k?: number | string;
    kernelMatrix?: number | string;
    kernelUnitLength?: number | string;
    kerning?: number | string;
    keyPoints?: number | string;
    keySplines?: number | string;
    keyTimes?: number | string;
    lengthAdjust?: number | string;
    letterSpacing?: number | string;
    lightingColor?: number | string;
    limitingConeAngle?: number | string;
    local?: number | string;
    markerEnd?: string;
    markerHeight?: number | string;
    markerMid?: string;
    markerStart?: string;
    markerUnits?: number | string;
    markerWidth?: number | string;
    mask?: string;
    maskContentUnits?: number | string;
    maskUnits?: number | string;
    mathematical?: number | string;
    mode?: number | string;
    numOctaves?: number | string;
    offset?: number | string;
    opacity?: number | string;
    operator?: number | string;
    order?: number | string;
    orient?: number | string;
    orientation?: number | string;
    origin?: number | string;
    overflow?: number | string;
    overlinePosition?: number | string;
    overlineThickness?: number | string;
    paintOrder?: number | string;
    panose1?: number | string;
    pathLength?: number | string;
    patternContentUnits?: string;
    patternTransform?: number | string;
    patternUnits?: string;
    pointerEvents?: number | string;
    points?: string;
    pointsAtX?: number | string;
    pointsAtY?: number | string;
    pointsAtZ?: number | string;
    preserveAlpha?: number | string;
    preserveAspectRatio?: string;
    primitiveUnits?: number | string;
    r?: number | string;
    radius?: number | string;
    refX?: number | string;
    refY?: number | string;
    renderingIntent?: number | string;
    repeatCount?: number | string;
    repeatDur?: number | string;
    requiredExtensions?: number | string;
    requiredFeatures?: number | string;
    restart?: number | string;
    result?: string;
    rotate?: number | string;
    rx?: number | string;
    ry?: number | string;
    scale?: number | string;
    seed?: number | string;
    shapeRendering?: number | string;
    slope?: number | string;
    spacing?: number | string;
    specularConstant?: number | string;
    specularExponent?: number | string;
    speed?: number | string;
    spreadMethod?: string;
    startOffset?: number | string;
    stdDeviation?: number | string;
    stemh?: number | string;
    stemv?: number | string;
    stitchTiles?: number | string;
    stopColor?: string;
    stopOpacity?: number | string;
    strikethroughPosition?: number | string;
    strikethroughThickness?: number | string;
    string?: number | string;
    stroke?: string;
    strokeDasharray?: string | number;
    strokeDashoffset?: string | number;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
    strokeMiterlimit?: number | string;
    strokeOpacity?: number | string;
    strokeWidth?: number | string;
    surfaceScale?: number | string;
    systemLanguage?: number | string;
    tableValues?: number | string;
    targetX?: number | string;
    targetY?: number | string;
    textAnchor?: string;
    textDecoration?: number | string;
    textLength?: number | string;
    textRendering?: number | string;
    to?: number | string;
    transform?: string;
    u1?: number | string;
    u2?: number | string;
    underlinePosition?: number | string;
    underlineThickness?: number | string;
    unicode?: number | string;
    unicodeBidi?: number | string;
    unicodeRange?: number | string;
    unitsPerEm?: number | string;
    vAlphabetic?: number | string;
    values?: string;
    vectorEffect?: number | string;
    version?: string;
    vertAdvY?: number | string;
    vertOriginX?: number | string;
    vertOriginY?: number | string;
    vHanging?: number | string;
    vIdeographic?: number | string;
    viewBox?: string;
    viewTarget?: number | string;
    visibility?: number | string;
    vMathematical?: number | string;
    widths?: number | string;
    wordSpacing?: number | string;
    writingMode?: number | string;
    x1?: number | string;
    x2?: number | string;
    x?: number | string;
    xChannelSelector?: string;
    xHeight?: number | string;
    xlinkActuate?: string;
    xlinkArcrole?: string;
    xlinkHref?: string;
    xlinkRole?: string;
    xlinkShow?: string;
    xlinkTitle?: string;
    xlinkType?: string;
    xmlBase?: string;
    xmlLang?: string;
    xmlns?: string;
    xmlnsXlink?: string;
    xmlSpace?: string;
    y1?: number | string;
    y2?: number | string;
    y?: number | string;
    yChannelSelector?: string;
    z?: number | string;
    zoomAndPan?: string;
}
export interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
    allowFullScreen?: boolean;
    allowpopups?: boolean;
    autoFocus?: boolean;
    autosize?: boolean;
    blinkfeatures?: string;
    disableblinkfeatures?: string;
    disableguestresize?: boolean;
    disablewebsecurity?: boolean;
    guestinstance?: string;
    httpreferrer?: string;
    nodeintegration?: boolean;
    partition?: string;
    plugins?: boolean;
    preload?: string;
    src?: string;
    useragent?: string;
    webpreferences?: string;
}
export interface ReactHTML {
    a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
    article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
    b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
    bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
    body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
    br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
    button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
    caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    data: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
    dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    del: DetailedHTMLFactory<DelHTMLAttributes<HTMLElement>, HTMLElement>;
    details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
    dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
    div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
    dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
    fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
    figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
    header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
    html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
    img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
    kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
    label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
    li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
    mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
    menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
    nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
    ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
    optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
    option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
    output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
    p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
    picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
    progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
    q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
    rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
    section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
    span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
    sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
    textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
    thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
    title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
    tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
    u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    'var': DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
}
export interface ReactSVG {
    animate: SVGFactory;
    circle: SVGFactory;
    clipPath: SVGFactory;
    defs: SVGFactory;
    desc: SVGFactory;
    ellipse: SVGFactory;
    feBlend: SVGFactory;
    feColorMatrix: SVGFactory;
    feComponentTransfer: SVGFactory;
    feComposite: SVGFactory;
    feConvolveMatrix: SVGFactory;
    feDiffuseLighting: SVGFactory;
    feDisplacementMap: SVGFactory;
    feDistantLight: SVGFactory;
    feDropShadow: SVGFactory;
    feFlood: SVGFactory;
    feFuncA: SVGFactory;
    feFuncB: SVGFactory;
    feFuncG: SVGFactory;
    feFuncR: SVGFactory;
    feGaussianBlur: SVGFactory;
    feImage: SVGFactory;
    feMerge: SVGFactory;
    feMergeNode: SVGFactory;
    feMorphology: SVGFactory;
    feOffset: SVGFactory;
    fePointLight: SVGFactory;
    feSpecularLighting: SVGFactory;
    feSpotLight: SVGFactory;
    feTile: SVGFactory;
    feTurbulence: SVGFactory;
    filter: SVGFactory;
    foreignObject: SVGFactory;
    g: SVGFactory;
    image: SVGFactory;
    line: SVGFactory;
    linearGradient: SVGFactory;
    marker: SVGFactory;
    mask: SVGFactory;
    metadata: SVGFactory;
    path: SVGFactory;
    pattern: SVGFactory;
    polygon: SVGFactory;
    polyline: SVGFactory;
    radialGradient: SVGFactory;
    rect: SVGFactory;
    stop: SVGFactory;
    svg: SVGFactory;
    switch: SVGFactory;
    symbol: SVGFactory;
    text: SVGFactory;
    textPath: SVGFactory;
    tspan: SVGFactory;
    use: SVGFactory;
    view: SVGFactory;
}
declare type Validator<T = any> = any;
declare type ValidationMap<T = any> = any;
declare type WeakValidationMap<T> = {
    [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined> : undefined extends T[K] ? Validator<T[K] | null | undefined> : Validator<T[K]>;
};
export interface AbstractView {
    styleMedia: StyleMedia;
    document: Document;
}
export interface ErrorInfo {
    componentStack: string;
}
declare global {
    namespace JSX {
        interface Element extends ReactElement<any> {
        }
        interface ElementClass extends Component<any> {
            render(): ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }
        interface IntrinsicAttributes extends Attributes {
        }
        interface IntrinsicClassAttributes<T> extends ClassAttributes<T> {
        }
        interface IntrinsicElements {
            a: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            address: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            area: DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            base: DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            big: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
            body: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            code: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            col: DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            datalist: DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            del: DetailedHTMLProps<DelHTMLAttributes<HTMLElement>, HTMLElement>;
            details: DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
            dfn: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: DetailedHTMLProps<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            map: DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: DetailedHTMLProps<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
            nav: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            object: DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
            p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            s: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            script: DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            select: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            source: DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            style: DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            table: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            tbody: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
            title: DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            'var': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            video: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
            svg: SVGProps<SVGSVGElement>;
            animate: SVGProps<SVGElement>;
            animateTransform: SVGProps<SVGElement>;
            circle: SVGProps<SVGCircleElement>;
            clipPath: SVGProps<SVGClipPathElement>;
            defs: SVGProps<SVGDefsElement>;
            desc: SVGProps<SVGDescElement>;
            ellipse: SVGProps<SVGEllipseElement>;
            feBlend: SVGProps<SVGFEBlendElement>;
            feColorMatrix: SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: SVGProps<SVGFEComponentTransferElement>;
            feComposite: SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: SVGProps<SVGFEDistantLightElement>;
            feFlood: SVGProps<SVGFEFloodElement>;
            feFuncA: SVGProps<SVGFEFuncAElement>;
            feFuncB: SVGProps<SVGFEFuncBElement>;
            feFuncG: SVGProps<SVGFEFuncGElement>;
            feFuncR: SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: SVGProps<SVGFEGaussianBlurElement>;
            feImage: SVGProps<SVGFEImageElement>;
            feMerge: SVGProps<SVGFEMergeElement>;
            feMergeNode: SVGProps<SVGFEMergeNodeElement>;
            feMorphology: SVGProps<SVGFEMorphologyElement>;
            feOffset: SVGProps<SVGFEOffsetElement>;
            fePointLight: SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: SVGProps<SVGFESpotLightElement>;
            feTile: SVGProps<SVGFETileElement>;
            feTurbulence: SVGProps<SVGFETurbulenceElement>;
            filter: SVGProps<SVGFilterElement>;
            foreignObject: SVGProps<SVGForeignObjectElement>;
            g: SVGProps<SVGGElement>;
            image: SVGProps<SVGImageElement>;
            line: SVGProps<SVGLineElement>;
            linearGradient: SVGProps<SVGLinearGradientElement>;
            marker: SVGProps<SVGMarkerElement>;
            mask: SVGProps<SVGMaskElement>;
            metadata: SVGProps<SVGMetadataElement>;
            path: SVGProps<SVGPathElement>;
            pattern: SVGProps<SVGPatternElement>;
            polygon: SVGProps<SVGPolygonElement>;
            polyline: SVGProps<SVGPolylineElement>;
            radialGradient: SVGProps<SVGRadialGradientElement>;
            rect: SVGProps<SVGRectElement>;
            stop: SVGProps<SVGStopElement>;
            switch: SVGProps<SVGSwitchElement>;
            symbol: SVGProps<SVGSymbolElement>;
            text: SVGProps<SVGTextElement>;
            textPath: SVGProps<SVGTextPathElement>;
            tspan: SVGProps<SVGTSpanElement>;
            use: SVGProps<SVGUseElement>;
            view: SVGProps<SVGViewElement>;
        }
    }
}







export interface JSXAloneAttrs<ClassName extends string = string> {
  [k: string]: any
  className?: ClassName | ClassName[]
}

export interface IElementClassCore<P= {}> {
  props: ElementClassProps<P>
  asJSXElement(): JSX.Element
  render(): JSX.Element
}

export type JSXAloneChild = JSXAloneElement | string

export type JSXAloneProps = JSXAloneAttrs & JSX.ElementChildrenAttribute

export type JSXAloneValue = string | boolean | number

export type JSXAloneElement = any

export type ElementLikeProps<P> = ( Readonly<{ children?: ReactNode}>&Readonly<P> )

export type ElementConstructor<T> = (props: ElementLikeProps<T>) => ElementLikeDom<ElementLikeProps<T>>

export type Tag<P> =  ((props: P) => JSX.Element)|( new (props: P) => JSX.Element)

export type ElementClassProps<T> = ElementLikeProps<T>

export type ElementClassConstructor<T> = new(props: ElementClassProps<T>) => IElementClassCore

export interface JSXAloneComponent {
  new(props: JSXAloneProps): JSXAloneComponent
  render(): JSXAloneElement
}

export type JSXAloneFunction = (props: JSXAloneProps) => JSXAloneElement

export type JSXAloneTag = string | JSXAloneComponent | JSXAloneFunction

export interface NodeLike<T, R extends ElementLikeDom<T> = ElementLikeDom<T>> {
  render(config?: RenderConfigDom): T
}

export interface TextNodeLike<T> extends NodeLike<T> {
  content: string
}

// TODO: this should BE or implementing JSX.Element where tag is type, attrs is props
export interface BaseElementLike<T> extends NodeLike<T> {
  tag: string
  attrs: { [name: string]: any }
  children: NodeLike<T>[]
  setAttribute(name: string, value: string): void
  dangerouslySetInnerHTML(s: string): void
  appendChild(c: NodeLike<T>): void
  replaceChild(i: number, c: NodeLike<T>): void
  parentElement?: ElementLikeDom<T>
  // destroy: ()=>void
  // findDescendant(p: Predicate<T>): ElementLike<T> | undefined
  // findAscendant(p: Predicate<T>): ElementLike<T> | undefined
  // getSiblings(): NodeLike<T>[]
  // findSibling(p: Predicate<T>): NodeLike<T> | undefined
  // getRootAscendant(): ElementLike<T>
  // getAscendants(): ElementLike<T>[]
  // find(p: Predicate<T>): NodeLike<T> | undefined
}

export interface HandleAttributeOptions<R extends ElementLikeDom = ElementLikeDom> {
    config: ElementLikeImplRenderConfig<R>;
    el: HTMLElement;
    attribute: string;
    value: any;
    elementLike: R;
}
export interface EventManager {
    addAppendToDomListener(l: () => void): void;
    onAppendToDom(): void;
    addEventListener(el: HTMLElement, type: string, fn: EventListener, options?: any): void;
    removeListeners(el: HTMLElement, andDescendants?: boolean, types?: []): void;
    uninstall(removeElementMarks?: boolean, types?: []): void;
}



export declare type CreateElementFunction<T, R= ElementLikeDom<T>> = (
  tag: JSXAloneTag,
  attrs?: JSXAloneAttrs<string> | undefined,
  ...children: any[]
) => R

declare type RenderFunction<OO extends RenderOutputDom = RenderOutputDom, R extends ElementLikeDom = ElementLikeDom> = (el: JSX.Element, config?: ElementLikeImplRenderConfigNoRoot<R>) => OO;
interface JSXAloneType<T extends RenderOutputDom = RenderOutputDom, R extends ElementLikeDom = ElementLikeDom> {
    render: RenderFunction<T, R>;
    createElement: CreateElementFunction<T, R>;
    updateElement<T, R>(element: R, tag: JSXAloneTag, attrs: JSXAloneAttrs<string>, children: any[], create?: boolean): void;
    createRef<T>(): RefObject<T>;
    lastEventManager?: EventManager;
}


// CORE


export interface RenderConfigCore<T, R extends ElementLikeCore<T> = ElementLikeCore<T>> {
}
export interface NodeLikeCore<T, R extends ElementLikeCore<T> = ElementLikeCore<T>> {
    render(config?: RenderConfigCore<T, R>): T;
}
export interface ElementLikeCore<T> extends NodeLikeCore<T> {
    tag: string;
    attrs: {
        [name: string]: any;
    };
    children: NodeLike<T>[];
    setAttribute(name: string, value: string): void;
    dangerouslySetInnerHTML(s: string): void;
    appendChild(c: NodeLike<T>): void;
    replaceChild(i: number, c: NodeLike<T>): void;
    parentElement?: ElementLikeDom<T>;
}
export declare const JSXAloneCore: JSXAloneType<RenderOutputDom, ElementLikeDom>

export const JSXAlone: JSXAloneType<RenderOutputDom, ElementLikeDom>

export interface IElementClassCore<P = {}> {
    props: ElementClassProps<P>;
    asJSXElement(): JSX.Element;
    render(): JSX.Element;
}
export declare abstract class ElementClassCore<P = {}> implements IElementClassCore<P> {
    protected _props: P;
    constructor(_props: P);
    readonly props: P;
    abstract render(): JSX.Element;
    asJSXElement(): JSX.Element;
}


// DOM 


export interface ElementLikeImplRenderConfigNoRoot<R extends ElementLikeDom = ElementLikeDom> extends RenderConfigCore<RenderOutputDom, R> {
    parent?: Node
    debug?: boolean
    updateExisting?: HTMLElement
  }
  
  export interface ElementLikeImplRenderConfig<R extends ElementLikeDom = ElementLikeDom> extends ElementLikeImplRenderConfigNoRoot<R> {
    rootElementLike: ElementLikeDom
  }

export declare abstract class ElementClassDom<P = {}> extends ElementClassCore<P> implements IElementClassCore<P> {
    protected _eventManager?: EventManager;
    neverUpdate: boolean;
    readonly eventManager: EventManager | undefined;
    afterRender(containerEl: HTMLElement): void
}
export interface JSXAloneDomType<T, R extends ElementLikeDom<T> = ElementLikeDom<T>> {
  createElement(tag: JSXAloneTag, attrs: JSXAloneAttrs, ...children: JSXAloneChild[]): R
  updateElement(element: R,   tag: JSXAloneTag, attrs: JSXAloneAttrs<string>, children: any[], create?: boolean): void
  render(el: JSX.Element, config?: RenderConfigDom): T
}
interface RenderConfigDom extends ElementLikeImplRenderConfigNoRoot<ElementLikeDom> {}


export interface ElementLikeDom<T extends RenderOutputDom = RenderOutputDom> extends BaseElementLike<T>, NodeLike<T> {
    _elementClassInstance?: IElementClassCore;
    ref?: RefObject<IElementClassCore & Element>;
    buildRootElement(config: ElementLikeImplRenderConfig<ElementLikeDom>): HTMLElement;
    render(config?: ElementLikeImplRenderConfig): T;
}
export declare type RenderOutputDom = HTMLElement | Text;


export interface ElementLikeImplRenderConfigDom<R extends ElementLikeDom = ElementLikeDom> extends ElementLikeImplRenderConfigNoRoot<R> {
    debug?: boolean;
    updateExisting?: HTMLElement;
    rootElementLike: ElementLikeDom;
}
export declare const JSXAloneDom: JSXAloneDomType<RenderOutputDom>



// STRING

export declare abstract class ElementClassString<P = {}> extends ElementClassCore<P> {
}

export interface ElementLikeString extends ElementLikeCore<string> {
}
export interface JSXAloneStringConfig extends RenderConfigCore<string, ElementLikeString> {
    indent?: boolean;
    indentLevel?: number;
    indentTabSize?: number;
}
export declare const JSXAloneString: JSXAloneType<string> & {
    render(el: JSX.Element, config?: JSXAloneStringConfig): string;
};




// JSON impl

export interface JsonImplOutputEl {
    tag: string;
    attrs: {
        [name: string]: any;
    };
    children: JsonImplOutput[];
    innerHtml: string | undefined;
}
export interface JSONImplOutputText {
    content?: string | number | boolean | null | undefined;
}
export declare type JsonImplOutput = JsonImplOutputEl | JSONImplOutputText;
export interface JsonImplRenderConfig extends RenderConfigCore<JsonImplOutput> {
}
export declare interface ElementLikeJson  extends BaseElementLike<JsonImplOutput> {
//     innerHtml: string | undefined;
//     render(config?: JsonImplRenderConfig): JsonImplOutput;
//     dangerouslySetInnerHTML(s: string): void;
}
export declare abstract class ElementClassJson<P = {}> extends ElementClassCore<P> {
}

export declare const JSXAloneJson: JSXAloneType<JsonImplOutput>;


export declare function renderWithImpl<T>(fn: ()=> JSX.Element, impl: 'json' | 'dom' | 'string', config?: any): T 