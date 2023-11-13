import {ConnectButton} from '@rainbow-me/rainbowkit';
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ConnectWalletButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button className="btn mx-2 rounded-3xl font-bolder nav-btn"
                                            onClick={openConnectModal} type="button">
                                            <span className='text-custom'>
                                                Connect to Wallet
                                            </span>
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button className="btn mx-2 rounded-3xl font-bolder nav-btn"
                                            onClick={openChainModal} type="button">
                                            <span className='text-custom'>
                                                Wrong network
                                            </span>
                                    </button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', gap: 12}}>
                                    <button
                                        onClick={openChainModal}
                                        style={{display: 'flex', alignItems: 'center'}}
                                        className="btn mx-2 rounded-3xl font-bolder nav-btn"
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <Image
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        width={12}
                                                        height={12}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        <span className='text-custom'>
                                        {chain.name}
                                            </span>
                                    </button>
                                    <button onClick={openAccountModal} type="button"
                                            className="btn mx-2 rounded-3xl font-bolder nav-btn">
                                       <span className='text-custom'>
                                        {account.displayName}
                                           {account.displayBalance
                                               ? ` (${account.displayBalance})`
                                               : ''}
                                           </span>
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
            </ConnectButton.Custom>
        );
};

export default dynamic(Promise.resolve(ConnectWalletButton), {ssr: false});