package wannabit.io.cosmostaion.task.gRpcTask.simulate;

import cosmos.tx.v1beta1.ServiceGrpc;
import cosmos.tx.v1beta1.ServiceOuterClass;
import wannabit.io.cosmostaion.base.BaseApplication;
import wannabit.io.cosmostaion.base.BaseChain;
import wannabit.io.cosmostaion.cosmos.Signer;
import wannabit.io.cosmostaion.dao.Account;
import wannabit.io.cosmostaion.model.type.Coin;
import wannabit.io.cosmostaion.model.type.Fee;
import wannabit.io.cosmostaion.network.ChannelBuilder;
import wannabit.io.cosmostaion.task.CommonTask;
import wannabit.io.cosmostaion.task.TaskListener;
import wannabit.io.cosmostaion.task.TaskResult;
import wannabit.io.cosmostaion.utils.WKey;
import wannabit.io.cosmostaion.utils.WLog;

public class SimulKavaCreateCdpGrpcTask extends CommonTask {

    private Account                 mAccount;
    private BaseChain               mBaseChain;
    private String                  mSender;
    private Coin                    mCollateral, mPrincipal;
    private String                  mCollateralType;
    private String                  mMemo;
    private Fee                     mFees;
    private String                  mChainId;

    public SimulKavaCreateCdpGrpcTask(BaseApplication app, TaskListener listener, Account account, BaseChain basechain, String sender,
                                 Coin collateral, Coin principal, String collateralType, String memo, Fee fee, String chainId) {
        super(app, listener);
        this.mAccount = account;
        this.mBaseChain = basechain;
        this.mSender = sender;
        this.mCollateral = collateral;
        this.mPrincipal = principal;
        this.mCollateralType = collateralType;
        this.mMemo = memo;
        this.mFees = fee;
        this.mChainId = chainId;
    }

    @Override
    protected TaskResult doInBackground(String... strings) {
        try {
            ServiceGrpc.ServiceBlockingStub txService = ServiceGrpc.newBlockingStub(ChannelBuilder.getChain(mBaseChain));
            ServiceOuterClass.SimulateRequest simulateTxRequest = Signer.getGrpcKavaCreateCdpSimulateReq(WKey.onAuthResponse(mBaseChain, mAccount), mSender, mCollateral, mPrincipal, mCollateralType, mFees, mMemo, WKey.getECKey(mApp, mAccount), mChainId, mAccount.customPath, mBaseChain);
            ServiceOuterClass.SimulateResponse response = txService.simulate(simulateTxRequest);
            mResult.resultData = response.getGasInfo();
            mResult.isSuccess = true;

        } catch (Exception e) {
            WLog.e("SimulKavaCreateCdpGrpcTask " + e.getMessage());
            mResult.isSuccess = false;
            mResult.errorMsg = e.getMessage();
        }
        return mResult;
    }
}
