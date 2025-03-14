package wannabit.io.cosmostaion.base;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Map;

import irismod.nft.QueryOuterClass;
import kava.swap.v1beta1.QueryOuterClass.DepositResponse;
import kava.swap.v1beta1.QueryOuterClass.PoolResponse;
import osmosis.gamm.v1beta1.BalancerPool;
import osmosis.gamm.v1beta1.Tx;
import sifnode.clp.v1.Querier;
import starnamed.x.starname.v1beta1.Types;
import stride.stakeibc.HostZoneOuterClass;
import wannabit.io.cosmostaion.dao.AssetPath;
import wannabit.io.cosmostaion.dao.MintscanToken;
import wannabit.io.cosmostaion.model.type.Coin;
import wannabit.io.cosmostaion.model.type.Fee;

public class BaseBroadCastActivity extends BaseActivity {

    public int                          mTxType = -1;
    public Fee                          mTxFee;
    public String                       mTxMemo;
    public String                       mDenom;                             //Transfer
    public String                       mToAddress;                         //Transfer
    public ArrayList<Coin>              mAmounts;                           //Transfer
    public Coin                         mAmount;                            //Delegate, Undelegate, Redelegate, ReInvest
    public String                       mValAddress;                        //Delegate, Undelegate, ReInvest
    public String                       mToValAddress;                      //Redelegate
    public ArrayList<String>            mValAddresses = new ArrayList<>();  //ClaimReward
    public String                       mNewRewardAddress;                  //SetRewardAddress
    public Map<Integer, String>         mSelectedOpinion;                   //Vote

    public String                       mStarNameDomain;                            //starname domain
    public String                       mStarNameDomainType;                        //starname domain type
    public String                       mStarNameAccount;                           //starname
    public ArrayList<Types.Resource>    mStarNameResources = new ArrayList();       //starname
    public boolean                      mIsDomain;

    public Tx.SwapAmountInRoute         mOsmosisSwapAmountInRoute;                  // osmosis
    public long                         mOsmosisPoolId;
    public Coin                         mSwapInCoin;
    public Coin                         mSwapOutCoin;

    public sifnode.clp.v1.Types.Pool    mSifPool;                                   // sif swap
    public Coin                         mSifSwapInCoin;
    public Coin                         mSifSwapOutCoin;
    public Coin                         mSifDepositCoin0;
    public Coin                         mSifDepositCoin1;
    public Coin                         mSifWithdrawCoin;
    public Querier.LiquidityProviderRes mMyProvider;

    public MintscanToken                mMintscanToken;
    public AssetPath                    mAssetPath;

    // NFT
    public String                           mNftDenomId;
    public String                           mNftDenomName;
    public String                           mNftTokenId;
    public String                           mNftName;
    public String                           mNftDescription;
    public String                           mNftHash;
    public QueryOuterClass.QueryNFTResponse mIrisResponse;

    // Kava
    public PoolResponse       mKavaSwapPool;
    public DepositResponse    mKavaDepositPool;
    public Coin               mKavaSwapIn;
    public Coin               mKavaSwapOut;
    public Coin               mKavaPoolTokenA;
    public Coin               mKavaPoolTokenB;
    public BigDecimal         mKavaShareAmount = BigDecimal.ZERO;
    public Coin               mCollateral;
    public Coin               mPrincipal;
    public String             mCollateralType;
    public Coin               mPayment;
    public ArrayList<Coin>    mHardPoolCoins = new ArrayList<>();

    // Authz
    public String mGranter;

    // Evm
    public String mHexValue;

    // Liquid
    public HostZoneOuterClass.HostZone mHostZone;

    public void onNextStep() { }

    public void onBeforeStep() { }
}
