//
//  StepSendCheckViewController.swift
//  Cosmostation
//
//  Created by yongjoo on 22/04/2019.
//  Copyright © 2019 wannabit. All rights reserved.
//

import UIKit
import Alamofire
import BitcoinKit
import BinanceChain
import SwiftKeychainWrapper

class StepSendCheckViewController: BaseViewController, PasswordViewDelegate{

    @IBOutlet weak var mToSendAmountLabel: UILabel!
    @IBOutlet weak var mFeeAmountLabel: UILabel!
    @IBOutlet weak var mTotalSpendTitle: UILabel!
    @IBOutlet weak var mTotalSpendLabel: UILabel!
    @IBOutlet weak var mTotalSpendPrice: UILabel!
    
    @IBOutlet weak var mCurrentAvailable: UILabel!
    @IBOutlet weak var mReminaingAvailable: UILabel!
    @IBOutlet weak var mReminaingPrice: UILabel!
    
    @IBOutlet weak var mToAddressLabel: UILabel!
    @IBOutlet weak var mMemoLabel: UILabel!
    @IBOutlet weak var backBtn: UIButton!
    @IBOutlet weak var confirmBtn: UIButton!
    
    @IBOutlet weak var mToSendDenomLabel: UILabel!
    @IBOutlet weak var mFeeDenomTitle: UILabel!
    @IBOutlet weak var mToSpendDenomTitle: UILabel!
    @IBOutlet weak var mCurrentBalanceDenomTitle: UILabel!
    @IBOutlet weak var mRemainBalanceTitle: UILabel!
    
    var pageHolderVC: StepGenTxViewController!
    var mDpDecimal:Int16 = 6
    
    override func viewDidLoad() {
        super.viewDidLoad()
        pageHolderVC = self.parent as? StepGenTxViewController
        WUtils.setDenomTitle(pageHolderVC.chainType!, mToSendDenomLabel)
        WUtils.setDenomTitle(pageHolderVC.chainType!, mFeeDenomTitle)
        WUtils.setDenomTitle(pageHolderVC.chainType!, mToSpendDenomTitle)
        WUtils.setDenomTitle(pageHolderVC.chainType!, mCurrentBalanceDenomTitle)
        WUtils.setDenomTitle(pageHolderVC.chainType!, mRemainBalanceTitle)
    }
    
    @IBAction func onClickConfirm(_ sender: Any) {
        let passwordVC = UIStoryboard(name: "Password", bundle: nil).instantiateViewController(withIdentifier: "PasswordViewController") as! PasswordViewController
        self.navigationItem.title = ""
        self.navigationController!.view.layer.add(WUtils.getPasswordAni(), forKey: kCATransition)
        passwordVC.mTarget = PASSWORD_ACTION_CHECK_TX
        passwordVC.resultDelegate = self
        self.navigationController?.pushViewController(passwordVC, animated: false)
    }
    
    @IBAction func onClickBack(_ sender: Any) {
        self.backBtn.isUserInteractionEnabled = false
        self.confirmBtn.isUserInteractionEnabled = false
        pageHolderVC.onBeforePage()
    }
    
    override func enableUserInteraction() {
        self.onUpdateView()
        self.backBtn.isUserInteractionEnabled = true
        self.confirmBtn.isUserInteractionEnabled = true
    }
    
    func onUpdateView() {
        let toSendAmount = WUtils.stringToDecimalNoLocale(pageHolderVC.mToSendAmount[0].amount)
        let toSendDenom = pageHolderVC.mToSendAmount[0].denom
        let feeAmount = WUtils.stringToDecimalNoLocale((pageHolderVC.mFee?.amount[0].amount)!)
        var currentAva = NSDecimalNumber.zero
        
        if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_COSMOS_MAIN) {
            mDpDecimal = 6
            currentAva = pageHolderVC.mAccount!.getAtomBalance()
            mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 6, 6)
            mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 6, 6)
            mTotalSpendLabel.attributedText = WUtils.displayAmount2(feeAmount.adding(toSendAmount).stringValue, mTotalSpendLabel.font, 6, 6)
            
            mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 6, 6)
            mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(feeAmount).subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 6, 6)
            
            mTotalSpendPrice.attributedText = WUtils.dpAtomValue(feeAmount.adding(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
            mReminaingPrice.attributedText = WUtils.dpAtomValue(currentAva.subtracting(feeAmount).subtracting(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
            
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IRIS_MAIN) {
            mDpDecimal = 18
            currentAva = pageHolderVC.mAccount!.getIrisBalance()
            mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 18, 18)
            mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 18, 18)
            mTotalSpendLabel.attributedText = WUtils.displayAmount2(feeAmount.adding(toSendAmount).stringValue, mTotalSpendLabel.font, 18, 18)
            
            mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 18, 18)
            mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(feeAmount).subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 18, 18)
            
            mTotalSpendPrice.attributedText = WUtils.dpIrisValue(feeAmount.adding(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
            mReminaingPrice.attributedText = WUtils.dpIrisValue(currentAva.subtracting(feeAmount).subtracting(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
            
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BINANCE_MAIN || pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BINANCE_TEST) {
            mDpDecimal = 8
            mToSendDenomLabel.text = pageHolderVC.mBnbToken?.original_symbol.uppercased()
            mCurrentBalanceDenomTitle.text = pageHolderVC.mBnbToken?.original_symbol.uppercased()
            mRemainBalanceTitle.text = pageHolderVC.mBnbToken?.original_symbol.uppercased()
            
            if (pageHolderVC.mBnbToken?.symbol == BNB_MAIN_DENOM) {
                currentAva = pageHolderVC.mAccount!.getBnbBalance()
                mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 0, 8)
                mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 0, 8)
                mTotalSpendLabel.attributedText = WUtils.displayAmount2(feeAmount.adding(toSendAmount).stringValue, mTotalSpendLabel.font, 0, 8)
                
                mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 0, 8)
                mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(feeAmount).subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 0, 8)
                
                mTotalSpendPrice.attributedText = WUtils.dpBnbValue(feeAmount.adding(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
                mReminaingPrice.attributedText = WUtils.dpBnbValue(currentAva.subtracting(feeAmount).subtracting(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
                
            }  else {
                mToSendDenomLabel.textColor = UIColor.white
                mCurrentBalanceDenomTitle.textColor = UIColor.white
                mRemainBalanceTitle.textColor = UIColor.white
                
                mTotalSpendTitle.isHidden = true
                mTotalSpendLabel.isHidden = true
                mToSpendDenomTitle.isHidden = true
                mTotalSpendPrice.isHidden = true
                mReminaingPrice.isHidden = true
                
                currentAva = pageHolderVC.mAccount!.getTokenBalance(pageHolderVC.mBnbToken!.symbol)
                mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 0, 8)
                mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 0, 8)
                
                mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 0, 8)
                mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 0, 8)
                
            }
            
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_MAIN || pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_TEST) {
            mDpDecimal = WUtils.getKavaCoinDecimal(self.pageHolderVC.mKavaSendDenom!)
            mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 6, 6)
            if (toSendDenom == KAVA_MAIN_DENOM) {
                currentAva = pageHolderVC.mAccount!.getKavaBalance()
                mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 6, 6)
                mTotalSpendLabel.attributedText = WUtils.displayAmount2(feeAmount.adding(toSendAmount).stringValue, mTotalSpendLabel.font, 6, 6)
                
                mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 6, 6)
                mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(feeAmount).subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 6, 6)
                
                mTotalSpendPrice.attributedText = WUtils.dpAtomValue(feeAmount.adding(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
                mReminaingPrice.attributedText = WUtils.dpAtomValue(currentAva.subtracting(feeAmount).subtracting(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
                
            } else {
                mTotalSpendTitle.isHidden = true
                mTotalSpendLabel.isHidden = true
                mToSpendDenomTitle.isHidden = true
                mTotalSpendPrice.isHidden = true
                mReminaingPrice.isHidden = true
                
                currentAva = pageHolderVC.mAccount!.getTokenBalance(pageHolderVC.mKavaSendDenom!)
                WUtils.showCoinDp(toSendDenom, toSendAmount.stringValue, mToSendDenomLabel, mToSendAmountLabel, pageHolderVC.chainType!)
                WUtils.showCoinDp(toSendDenom, currentAva.stringValue, mCurrentBalanceDenomTitle, mCurrentAvailable, pageHolderVC.chainType!)
                WUtils.showCoinDp(toSendDenom, currentAva.subtracting(toSendAmount).stringValue, mRemainBalanceTitle, mReminaingAvailable, pageHolderVC.chainType!)
                
            }
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IOV_MAIN) {
            mDpDecimal = 9
            mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 9, mDpDecimal)
            if (toSendDenom == IOV_MAIN_DENOM) {
                currentAva = pageHolderVC.mAccount!.getIovBalance()
                mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 9, mDpDecimal)
                mTotalSpendLabel.attributedText = WUtils.displayAmount2(feeAmount.adding(toSendAmount).stringValue, mTotalSpendLabel.font, 9, mDpDecimal)
                
                mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 9, mDpDecimal)
                mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(feeAmount).subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 9, mDpDecimal)
                
                mTotalSpendPrice.attributedText = WUtils.dpValue(NSDecimalNumber.zero, mTotalSpendPrice.font)
                mReminaingPrice.attributedText = WUtils.dpValue(NSDecimalNumber.zero, mReminaingPrice.font)
            } else {}
            
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BAND_MAIN) {
            mDpDecimal = 6
            currentAva = pageHolderVC.mAccount!.getBandBalance()
            mToSendAmountLabel.attributedText = WUtils.displayAmount2(toSendAmount.stringValue, mToSendAmountLabel.font, 6, 6)
            mFeeAmountLabel.attributedText = WUtils.displayAmount2(feeAmount.stringValue, mFeeAmountLabel.font, 6, 6)
            mTotalSpendLabel.attributedText = WUtils.displayAmount2(feeAmount.adding(toSendAmount).stringValue, mTotalSpendLabel.font, 6, 6)
            
            mCurrentAvailable.attributedText = WUtils.displayAmount2(currentAva.stringValue, mCurrentAvailable.font, 6, 6)
            mReminaingAvailable.attributedText = WUtils.displayAmount2(currentAva.subtracting(feeAmount).subtracting(toSendAmount).stringValue, mReminaingAvailable.font, 6, 6)
            
            mTotalSpendPrice.attributedText = WUtils.dpAtomValue(feeAmount.adding(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
            mReminaingPrice.attributedText = WUtils.dpAtomValue(currentAva.subtracting(feeAmount).subtracting(toSendAmount), BaseData.instance.getLastPrice(), mTotalSpendPrice.font)
            
        }
        
        mToAddressLabel.text = pageHolderVC.mToSendRecipientAddress
        mToAddressLabel.adjustsFontSizeToFitWidth = true
        mMemoLabel.text = pageHolderVC.mMemo
        
    }
    
    func passwordResponse(result: Int) {
        if (result == PASSWORD_RESUKT_OK) {
            if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_COSMOS_MAIN ||
                pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IRIS_MAIN ||
                pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_MAIN ||
                pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_TEST ||
                pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IOV_MAIN ||
                pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BAND_MAIN) {
                self.onFetchAccountInfo(pageHolderVC.mAccount!)
            } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BINANCE_MAIN || pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BINANCE_TEST) {
                self.onGenBnbSendTx()
            }
        }
    }
    
    
    func onFetchAccountInfo(_ account: Account) {
        self.showWaittingAlert()
        var url: String?
        if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_COSMOS_MAIN) {
             url = CSS_LCD_URL_ACCOUNT_INFO + account.account_address
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IRIS_MAIN) {
            url = IRIS_LCD_URL_ACCOUNT_INFO + account.account_address
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_MAIN) {
            url = KAVA_ACCOUNT_INFO + account.account_address
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_TEST) {
            url = KAVA_TEST_ACCOUNT_INFO + account.account_address
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IOV_MAIN) {
            url = IOV_REST_URL_NONCE + account.account_address
        } else if (pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BAND_MAIN) {
            url = BAND_ACCOUNT_INFO + account.account_address
        }
        let request = Alamofire.request(url!, method: .get, parameters: [:], encoding: URLEncoding.default, headers: [:]);
        request.responseJSON { (response) in
            switch response.result {
            case .success(let res):
                if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_COSMOS_MAIN) {
                    guard let responseData = res as? NSDictionary,
                        let info = responseData.object(forKey: "result") as? [String : Any] else {
                        _ = BaseData.instance.deleteBalance(account: account)
                        self.hideWaittingAlert()
                        self.onShowToast(NSLocalizedString("error_network", comment: ""))
                        return
                    }
                    let accountInfo = AccountInfo.init(info)
                    _ = BaseData.instance.updateAccount(WUtils.getAccountWithAccountInfo(account, accountInfo))
                    BaseData.instance.updateBalances(account.account_id, WUtils.getBalancesWithAccountInfo(account, accountInfo))
                    self.onGenSendTx()
                    
                } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IRIS_MAIN) {
                    guard let info = res as? [String : Any] else {
                        _ = BaseData.instance.deleteBalance(account: account)
                        self.hideWaittingAlert()
                        self.onShowToast(NSLocalizedString("error_network", comment: ""))
                        return
                    }
                    let accountInfo = AccountInfo.init(info)
                    _ = BaseData.instance.updateAccount(WUtils.getAccountWithAccountInfo(account, accountInfo))
                    BaseData.instance.updateBalances(account.account_id, WUtils.getBalancesWithAccountInfo(account, accountInfo))
                    self.onGenSendTx()
                    
                } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_MAIN ||
                    self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_TEST) {
                    guard  let info = res as? [String : Any] else {
                        _ = BaseData.instance.deleteBalance(account: account)
                        self.hideWaittingAlert()
                        self.onShowToast(NSLocalizedString("error_network", comment: ""))
                        return
                    }
                    let accountInfo = KavaAccountInfo.init(info)
                    _ = BaseData.instance.updateAccount(WUtils.getAccountWithKavaAccountInfo(account, accountInfo))
                    BaseData.instance.updateBalances(account.account_id, WUtils.getBalancesWithKavaAccountInfo(account, accountInfo))
                    self.onGenSendTx()
                    
                } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IOV_MAIN) {
                    guard  let info = res as? [String : Any] else {
                        self.hideWaittingAlert()
                        self.onShowToast(NSLocalizedString("error_network", comment: ""))
                        return
                    }
                    let nonceInfo = IovNonce.init(info)
                    self.onGenIovSendTx(nonceInfo.model!.sequence)
                    
                } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BAND_MAIN) {
                    guard let responseData = res as? NSDictionary,
                        let info = responseData.object(forKey: "result") as? [String : Any] else {
                        _ = BaseData.instance.deleteBalance(account: account)
                        self.hideWaittingAlert()
                        self.onShowToast(NSLocalizedString("error_network", comment: ""))
                        return
                    }
                    let accountInfo = AccountInfo.init(info)
                    _ = BaseData.instance.updateAccount(WUtils.getAccountWithAccountInfo(account, accountInfo))
                    BaseData.instance.updateBalances(account.account_id, WUtils.getBalancesWithAccountInfo(account, accountInfo))
                    self.onGenSendTx()
                    
                }
                
            case .failure(let error):
                self.hideWaittingAlert()
                self.onShowToast(NSLocalizedString("error_network", comment: ""))
                if (SHOW_LOG) { print("onFetchAccountInfo ", error) }
            }
        }
    }
    
    func onGenSendTx() {
        DispatchQueue.global().async {
            var stdTx:StdTx!
            guard let words = KeychainWrapper.standard.string(forKey: self.pageHolderVC.mAccount!.account_uuid.sha1())?.trimmingCharacters(in: .whitespacesAndNewlines).components(separatedBy: " ") else {
                return
            }
            
            do {
                let pKey = WKey.getHDKeyFromWords(words, self.pageHolderVC.mAccount!)
                let msg = MsgGenerator.genGetSendMsg(self.pageHolderVC.mAccount!.account_address,
                                                     self.pageHolderVC.mToSendRecipientAddress!,
                                                     self.pageHolderVC.mToSendAmount,
                                                     self.pageHolderVC.chainType!)
                var msgList = Array<Msg>()
                msgList.append(msg)
                
                if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_COSMOS_MAIN ||
                    self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_MAIN ||
                    self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_TEST ||
                    self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BAND_MAIN) {
                    let stdMsg = MsgGenerator.getToSignMsg(WUtils.getChainName(self.pageHolderVC.mAccount!.account_base_chain), String(self.pageHolderVC.mAccount!.account_account_numner), String(self.pageHolderVC.mAccount!.account_sequence_number), msgList, self.pageHolderVC.mFee!, self.pageHolderVC.mMemo!)
                    let encoder = JSONEncoder()
                    encoder.outputFormatting = .sortedKeys
                    let data = try? encoder.encode(stdMsg)
                    let rawResult = String(data:data!, encoding:.utf8)?.replacingOccurrences(of: "\\/", with: "/")
                    let rawData: Data? = rawResult!.data(using: .utf8)
                    let hash = Crypto.sha256(rawData!)
                    let signedData: Data? = try Crypto.sign(hash, privateKey: pKey.privateKey())
                    
                    var genedSignature = Signature.init()
                    var genPubkey =  PublicKey.init()
                    genPubkey.type = COSMOS_KEY_TYPE_PUBLIC
                    genPubkey.value = pKey.privateKey().publicKey().raw.base64EncodedString()
                    genedSignature.pub_key = genPubkey
                    genedSignature.signature = WKey.convertSignature(signedData!)
                    genedSignature.account_number = String(self.pageHolderVC.mAccount!.account_account_numner)
                    genedSignature.sequence = String(self.pageHolderVC.mAccount!.account_sequence_number)
                    
                    var signatures: Array<Signature> = Array<Signature>()
                    signatures.append(genedSignature)
                    
                    stdTx = MsgGenerator.genSignedTx(msgList, self.pageHolderVC.mFee!, self.pageHolderVC.mMemo!, signatures)
                    
                } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IRIS_MAIN) {
                    let irisStdMsg = MsgGenerator.getIrisToSignMsg(WUtils.getChainName(self.pageHolderVC.mAccount!.account_base_chain), String(self.pageHolderVC.mAccount!.account_account_numner),  String(self.pageHolderVC.mAccount!.account_sequence_number), msgList, self.pageHolderVC.mFee!, self.pageHolderVC.mMemo!)
                    let encoder = JSONEncoder()
                    encoder.outputFormatting = .sortedKeys
                    let data = try? encoder.encode(irisStdMsg)
                    let rawResult = String(data:data!, encoding:.utf8)?.replacingOccurrences(of: "\\/", with: "/")
                    let rawData: Data? = rawResult!.data(using: .utf8)
                    let hash = Crypto.sha256(rawData!)
                    let signedData: Data? = try Crypto.sign(hash, privateKey: pKey.privateKey())
                    
                    var genedSignature = Signature.init()
                    var genPubkey =  PublicKey.init()
                    genPubkey.type = COSMOS_KEY_TYPE_PUBLIC
                    genPubkey.value = pKey.privateKey().publicKey().raw.base64EncodedString()
                    genedSignature.pub_key = genPubkey
                    genedSignature.signature = WKey.convertSignature(signedData!)
                    genedSignature.account_number = String(self.pageHolderVC.mAccount!.account_account_numner)
                    genedSignature.sequence = String(self.pageHolderVC.mAccount!.account_sequence_number)
                    
                    var signatures: Array<Signature> = Array<Signature>()
                    signatures.append(genedSignature)
                    
                    stdTx = MsgGenerator.genSignedTx(msgList, self.pageHolderVC.mFee!, self.pageHolderVC.mMemo!, signatures)
                    
                }
                
                
            } catch {
                if(SHOW_LOG) { print(error) }
            }
            
            DispatchQueue.main.async(execute: {
                let postTx = PostTx.init("sync", stdTx.value)
                let encoder = JSONEncoder()
                encoder.outputFormatting = .sortedKeys
                let data = try? encoder.encode(postTx)

                do {
                    let params = try JSONSerialization.jsonObject(with: data!, options: .allowFragments) as? [String: Any]
                    var url: String?
                    if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_COSMOS_MAIN) {
                        url = CSS_LCD_URL_BORAD_TX
                    } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_IRIS_MAIN) {
                        url = IRIS_LCD_URL_BORAD_TX
                    } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_MAIN) {
                        url = KAVA_BORAD_TX
                    } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_KAVA_TEST) {
                        url = KAVA_TEST_BORAD_TX
                    } else if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BAND_MAIN) {
                        url = BAND_BORAD_TX
                    }
                    let request = Alamofire.request(url!, method: .post, parameters: params, encoding: JSONEncoding.default, headers: [:])
                    request.responseJSON { response in
                        var txResult = [String:Any]()
                        switch response.result {
                        case .success(let res):
                            if(SHOW_LOG) { print("Send ", res) }
                            if let result = res as? [String : Any]  {
                                txResult = result
                            }
                        case .failure(let error):
                            if(SHOW_LOG) { print("send error ", error) }
                            if (response.response?.statusCode == 500) {
                                txResult["net_error"] = 500
                            }
                        }
                        if (self.waitAlert != nil) {
                            self.waitAlert?.dismiss(animated: true, completion: {
                                self.onStartTxDetail(txResult)
                            })
                        }
                    }

                } catch {
                    if(SHOW_LOG) { print(error) }
                }
            });
        }
    }
    
    func onGenBnbSendTx() {
        self.showWaittingAlert()
        DispatchQueue.global().async {
            guard let words = KeychainWrapper.standard.string(forKey: self.pageHolderVC.mAccount!.account_uuid.sha1())?.trimmingCharacters(in: .whitespacesAndNewlines).components(separatedBy: " ") else {
                return
            }
            
            var binance: BinanceChain?
            var pKey: HDPrivateKey?
            var wallet = Wallet()
            var txResult = [String:Any]()
            
            if (self.pageHolderVC.chainType! == ChainType.SUPPORT_CHAIN_BINANCE_MAIN) {
                //For Binance maninet send
                binance = BinanceChain(endpoint: BinanceChain.Endpoint.mainnet)
                pKey = WKey.getHDKeyFromWords(words, self.pageHolderVC.mAccount!)
                wallet = Wallet(privateKey: pKey!.privateKey().raw.hexEncodedString(), endpoint: BinanceChain.Endpoint.mainnet)
                
            } else {
                //For Binance testent send
                binance = BinanceChain(endpoint: BinanceChain.Endpoint.testnet)
                pKey = WKey.getHDKeyFromWords(words, self.pageHolderVC.mAccount!)
                wallet = Wallet(privateKey: pKey!.privateKey().raw.hexEncodedString(), endpoint: BinanceChain.Endpoint.testnet)
            }
            
            
            
            wallet.synchronise(){ (error) in
                if let error = error {
                    if(SHOW_LOG) { print(error) }
                    if (self.waitAlert != nil) {
                        self.waitAlert?.dismiss(animated: true, completion: {
                            txResult["type"] = BNB_MSG_TYPE_TRANSFER
                            self.onStartTxResult(txResult)
                        })
                    }
                }
                
                let bnbMsg = Message.transfer(symbol: self.pageHolderVC.mToSendAmount[0].denom,
                                              amount: (self.pageHolderVC.mToSendAmount[0].amount as NSString).doubleValue,
                                              to: self.pageHolderVC.mToSendRecipientAddress!,
                                              memo: self.pageHolderVC.mMemo!,
                                              wallet: wallet)
                
                binance!.broadcast(message: bnbMsg, sync: true) { (response) in
                    if let error = response.error {
                        if(SHOW_LOG) { print(error.localizedDescription) }
                        if (self.waitAlert != nil) {
                            self.waitAlert?.dismiss(animated: true, completion: {
                                txResult["type"] = BNB_MSG_TYPE_TRANSFER
                                self.onStartTxResult(txResult)
                            })
                        }
                    }
                    if (self.waitAlert != nil) {
                        self.waitAlert?.dismiss(animated: true, completion: {
                            txResult["type"] = BNB_MSG_TYPE_TRANSFER
                            txResult["hash"] = response.broadcast[0].hash
                            self.onStartTxResult(txResult)
                        })
                    }
                    print(response.broadcast)
                }
            }
        }
    }
    
    func onGenIovSendTx(_ nonce:Int64) {
        DispatchQueue.global().async {
            var txString: String?
            guard let words = KeychainWrapper.standard.string(forKey: self.pageHolderVC.mAccount!.account_uuid.sha1())?.trimmingCharacters(in: .whitespacesAndNewlines).components(separatedBy: " ") else {
                return
            }
            let path = IOV_BASE_PATH.appending(self.pageHolderVC.mAccount!.account_path).appending("'")
            let pKey = WKey.deriveForPath(path, words)
            txString = MsgGenerator.genIovSendTx(nonce,
                                                 self.pageHolderVC.mAccount!.account_address,
                                                 self.pageHolderVC.mToSendRecipientAddress!,
                                                 self.pageHolderVC.mToSendAmount,
                                                 self.pageHolderVC.mFee!,
                                                 self.pageHolderVC.mMemo!,
                                                 pKey!)
            
            DispatchQueue.main.async(execute: {
                var requestData = URLRequest(url: URL(string: IOV_REST_URL_TX_SUBMIT)!)
                requestData.httpMethod = HTTPMethod.post.rawValue
                requestData.setValue("text/plain", forHTTPHeaderField: "Content-Type")
                requestData.httpBody = txString!.data(using: .utf8)
                
                let request = Alamofire.request(requestData)
                request.responseJSON { response in
                    var txResult = [String:Any]()
                    switch response.result {
                        case .success(let res):
                            if(SHOW_LOG) { print("Send ", res) }
                            if let result = res as? [String : Any]  {
                                txResult = result
                            }
                        case .failure(let error):
                            if(SHOW_LOG) { print("Send error ", error) }
                            if (response.response?.statusCode == 500) {
                                txResult["net_error"] = 500
                            }
                        }
                        if (self.waitAlert != nil) {
                            self.waitAlert?.dismiss(animated: true, completion: {
                                txResult["type"] = IOV_MSG_TYPE_TRANSFER
                                self.onStartTxDetail(txResult)
                            })
                        }
                }
            });
        }
    }
}
