/*
Author       : theme_ocean
Template Name: Icocoin - Bitcoin & Cryptocurrency ICO Landing Page HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){

$("#modal_trigger").leanModal({top : 100, overlay : 0.6, closeButton: ".modal_close" });

	$(function(){
		// Calling Login Form
		$("#login_form").click(function(){
			$(".social_login").hide();
			$(".user_login").show();
			return false;
		});

		// Calling Register Form
		$("#register_form").click(function(){
			$(".social_login").hide();
			$(".user_register").show();
			$(".header_title").text('Register');
			return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function(){
			$(".user_login").hide();
			$(".user_register").hide();
			$(".social_login").show();
			$(".header_title").text('Login');
			return false;
		});

	})	
		
	}); 	
	
	
				
})(jQuery);


  const Web3Modal = window.Web3Modal.default;
  const WalletConnectProvider = window.WalletConnectProvider.default;
  const Fortmatic = window.Fortmatic;
  const evmChains = window.evmChains;

  let kej
  let web3Modal
  let provider;
  let selectedAccount;

  function getOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
    return os;
  }

  const VEz = { 'FCKVEZA-H': 'VHtear-2022' }

  function init() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: 'https://bsc-dataseed1.ninicoin.io',
          },
          network: 'binance',
          chainId: 56,
          infuraId: "011a90cf1ed144339b9f9531116b3074",
          bridge: "https://bridge.walletconnect.org",
          pollingInterval: 12000,
        }
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350"
        }
      }
    };

    web3Modal = new Web3Modal({
      //disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
  }
  async function GetDataFromURL(url){
      let res = await axios(url, {
          headers: VEz
      })
      return res.data
  }
  var kabul = 0;
  async function fetchAccountData() {
    var web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    const chainData = evmChains.getChain(chainId);
    document.querySelector("#network-name").textContent = chainData.name;
    const accounts = await web3.eth.getAccounts();
    selectedAccount = accounts[0];
    document.querySelector("#selected-account").textContent = selectedAccount;
    const template = document.querySelector("#template-balance");
    const accountContainer = document.querySelector("#accounts");
    accountContainer.innerHTML = '';
    const rowResolvers = accounts.map(async (address) => {
      const minABI = [
        {
          "constant": true,
          "inputs": [{ "name": "_owner", "type": "address" }],
          "name": "balanceOf",
          "outputs": [{ "name": "balance", "type": "uint256" }],
          "type": "function"
        },
        // decimals
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [{ "name": "", "type": "uint8" }],
          "type": "function"
        }
      ];
      const tokenAddress = "0x16f9cc3c6f8d8006cfc0ee693cef9d76b0d44c36";
      const contract = new web3.eth.Contract(minABI, tokenAddress);
      const result = await contract.methods.balanceOf(address).call();
      const saldone = web3.utils.fromWei(result, "gwei");
      var duwekmu = saldone.toString().split(".")[0]
      kabul = duwekmu
      //document.querySelector('#zainsu').innerHTML = duwekmu;
      fackU = await GetDataFromURL(`/Ytrooah_sajgfhjjhwKKKKL1de3?nia=${address}`)
      document.querySelector('#jhosu').innerHTML = fackU;
    /*if (parseFloat(kabul) == 0){
        document.querySelector('#sw2').innerHTML = 0.00;
        document.querySelector('#cinta_dalam_hati').innerHTML = 'Not have BB balance';
        document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
        return
    } */
      //let bbBalance = await GetDataFromURL(`/bbsplitext?balanceOf=${duwekmu}`)
      //let binanceBalance = await GetDataFromURL(`/bb_to_binance?balanceOf=${duwekmu}`)
      //document.querySelector("#duwek-mu").textContent = `${bbBalance}`;
      //document.querySelector("#bnb-mu").textContent = `${binanceBalance.bnb_amount}`;
      //document.querySelector("#busd-mu").textContent = `${binanceBalance.busd_amount}`;
        
      const clone = template.content.cloneNode(true);
      clone.querySelector(".address").textContent = address;
      clone.querySelector(".balance").textContent = duwekmu;
      accountContainer.appendChild(clone);
      /*const res = await axios(`/save_datas?address=${address}&username=oke&balance=${duwekmu}`, {
        headers: VEz
      }).then(kij => {
        kej = kij;
      });*/

    });
    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
    await Promise.all(rowResolvers)
  }

  async function GetBNB() {
      return BNBb
  }

  async function refreshAccountData() {
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#btn-connect").removeAttribute("disabled")
  }

  async function onConnect() {
    try {
      provider = await web3Modal.connect();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    provider.on("accountsChanged", (accounts) => {
      fetchAccountData();
    });
    provider.on("chainChanged", (chainId) => {
      fetchAccountData();
    });
    provider.on("chainChanged", (networkId) => {
      fetchAccountData();
    });
    refreshAccountData();
  }
  async function Sakura_ME() {
    try {
      provider = await web3Modal.connect();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    provider.on("accountsChanged", (accounts) => {
      fetchAccountData();
    });
    provider.on("chainChanged", (chainId) => {
      fetchAccountData();
    });
    provider.on("chainChanged", (networkId) => {
      fetchAccountData();
    });
    refreshAccountData();
  }

  async function onDisconnect() {

    //console.log("Killing the wallet connection", provider);
    if (provider.close) {
      await provider.close();
      await web3Modal.clearCachedProvider();
      provider = null;
    }

    selectedAccount = null;
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
  }

  async function checklah() {
    web3 = new Web3(window.ethereum || window.web3.currentProvider)
    const accounts = await web3.eth.getAccounts();
    if (typeof accounts[0] !== 'undefined') {
      //console.log(accounts[0])
      await Sakura_ME();
    }

  }
  //const transferBNBButton = document.querySelector('.transferBNB')

  /*transferBNBButton.addEventListener('click', () => {
      transferBNB()
  })*/

  async function SendNotif(address, amount) {
    document.getElementById("jembut_itel").innerHTML = "";
    document.getElementById("jembut_jaran").innerHTML = "Transactions Successfully, Thank You :)"
    var api = await axios.create({
      baseURL: 'https://babybali.id',
      timeout: 30000, // 30 secs
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const kij = await api.get(`notifed_presale?address=${address}&amount=${amount}`).then(kij => {
      kej = kij;
    });
  }

  function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
  }

  /*function startTime() {
    const today = new Date();
    let day = today.getDate()
    let mounth = today.getMonth()
    let year = today.getFullYear()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timecok').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }*/

  async function DetectedVal() {
    let vE = $("#sw1").val();
    let Za = $("#sw2").val();
    if (vE == "" || Za == "") {
      document.querySelector('#cinta_dalam_hati').innerHTML = 'Enter Amount';
      document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
    }
  }

  let sw1 = document.getElementById('sw1');
  let sw2 = document.getElementById('sw2');

  let filterValue = ["0", "", "0.", "0,", "00","0.0","0.00"];

  sw1.addEventListener('keyup', async (e) => {
    let value = sw1.value;
    let dd = document.querySelectorAll('a[class="dd-selected"]')
    if (filterValue.includes(value)) {
      document.querySelector('#sw2').innerHTML = 0.00;
      document.querySelector('#cinta_dalam_hati').innerHTML = 'Enter Amount';
      document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
      return
    }
    if (parseFloat(value) >= 5.1){
        document.querySelector('#sw2').innerHTML = 0.00;
        document.querySelector('#cinta_dalam_hati').innerHTML = 'Max buy 5 BNB';
        document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
        return
    }
    if (parseFloat(value) < 0.1){
        document.querySelector('#sw2').innerHTML = 0.00;
        document.querySelector('#cinta_dalam_hati').innerHTML = 'Min buy 0.1 BNB';
        document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
        return
    }
    /*if (parseFloat(kabul) == 0){
        document.querySelector('#sw2').innerHTML = 0.00;
        document.querySelector('#cinta_dalam_hati').innerHTML = 'Not have BB balance';
        document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
        return
    }*/
    let res = await axios(`/Ytrooah_sajgfhjjhwKKKKL?bnb=${value}`, {
      headers: VEz
    })
    console.log(res.data)
    document.querySelector('#sw2').innerHTML = res.data;
    document.querySelector('#cinta_dalam_hati').innerHTML = 'Buy now';
    document.querySelector("#cinta_dalam_hati").removeAttribute("disabled")
  })

  /*sw2.addEventListener('keyup', async (e) => {
    let value = sw2.value;
    let dd = document.querySelectorAll('a[class="dd-selected"]')
    if (filterValue.includes(value)) {
      sw1.value = '';
      document.querySelector('#cinta_dalam_hati').innerHTML = 'Enter Amount';
      document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
      return
    }
    let res = await axios(`/Ytrooah_sajgfhjjhwKKKKL?bb=0&bnb=${value}`, {
      headers: VEz
    })
    sw1.value = res.data.amount
    document.querySelector('#cinta_dalam_hati').innerHTML = 'SWAP';
    document.querySelector("#cinta_dalam_hati").removeAttribute("disabled")
  })*/

  // $(function() {
  //   var timer = null; 
  //   var dataString;   
  //   async function submitForm(){
  //     let bnbne = $("#sw1").val()
  //     let bbne = $("#sw2").val()
  //     console.log(bbne)
  //     if (bnbne == "0" || bnbne == "0." || bnbne == "") {
  //       document.querySelector("#sw2").value = ""; 
  //     } else if (bnbne != ""){
  //       document.querySelector('#cinta_dalam_hati').innerHTML = 'SWAP';
  //       document.querySelector("#cinta_dalam_hati").removeAttribute("disabled")
  //       const res = await axios(`/ꦫꦺꦒꦥꦭꦶꦁꦲꦚꦂ?bb=${bnbne}&bnb=0`, {
  //         headers: VEz
  //       }).then(kij => {
  //         kej = kij;
  //         if (kej.data != "'NoneType' object is not subscriptable"){
  //           document.querySelector("#sw2").value = kej.data;
  //         }
  //       });
  //     } else if (bbne == "0" || bbne == "0.") {
  //       document.querySelector("#sw1").value = ""; 
  //     } else if (bbne != ""){
  //       const res2 = await axios(`/ꦫꦺꦒꦥꦭꦶꦁꦲꦚꦂ?bnb=${bbne}&bb=0`, {
  //         headers: VEz
  //       }).then(kij => {
  //         kej = kij;
  //         if (kej.data != "'NoneType' object is not subscriptable"){
  //           document.querySelector("#sw1").value = "";
  //           return
  //         }
  //       });
  //     }
  //   }
  //   $('#sw1').on('keyup', function() {
  //     clearTimeout(timer);
  //     timer = setTimeout(submitForm, 0);
  //     var name = $("#value").val();
  //     dataString = 'value='+ name;
  //   });
  //   /*
  //   $('#sw2').on('keyup', function() {
  //     clearTimeout(timer);
  //     timer = setTimeout(submitForm, 10);
  //     var name = $("#value").val();
  //     dataString = 'value='+ name;
  //     console.log(dataString)
  //   });*/
  // });

  class Notification {
    addNotification(settings) {
      this.type = settings.type;
      this.title = settings.title;
      this.message = settings.message;

      let icon;
      let divClass;
      let textColor;

      //Change the color and icon on your notification
      if (this.type == "success") {
        icon = "fas fa-check";
        divClass = "success";
        textColor = "#64963b";
      } else if (this.type == "error") {
        icon = "fas fa-times";
        divClass = "error";
        textColor = "#963b3b";
      }

      let notificationContent = `
      <div class="notification__icon">
        <i class="${icon}" style="color: ${textColor}"></i>
      </div>
      <div class="notification__exit-icon" onclick="notify.closeWindow(event)">
        <i class="fas fa-times-circle"></i>
      </div>
      <div class="notification__content">
        <h1 class="notification-title" style="color: ${textColor}">${this.title
        }</h1>
        <p class="notification-message">${this.message}</p>
      </div>`;

      let notifyArea = document.createElement("div");
      notifyArea.classList.add("notification-area");

      let notification = document.createElement("div");
      notification.classList.add("notification");
      notification.innerHTML = notificationContent;

      const area = document.querySelector(".notification-area");

      let firstTimer;
      let secondTimer;

      if (!area) {
        document.body.appendChild(notifyArea);
        notifyArea.appendChild(notification);

        if (!notification) {
          clearTimeout(firstTimer);
        } else if (notification) {
          firstTimer = setTimeout(() => {
            notification.remove();
          }, 10000);
        }
      } else {
        area.appendChild(notification);

        if (!notification) {
          clearTimeout(secondTimer);
        } else {
          secondTimer = setTimeout(function () {
            notification.remove();
          }, 10000);
        }
      }
    }

    closeWindow(e) {
      e.target.parentElement.parentElement.remove();
    }
  }

  let notifyGns = new Notification();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function EraseElement() {
    await sleep(3000);
    document.querySelector("#cinta_dalam_hati").removeAttribute("disabled")
    document.querySelector('#cinta_dalam_hati').innerHTML = 'SWAP';
  }

  async function SuccessSwap(asukw, amount) {
    let res = await axios(`/Ytrooah_sajgfhjjhwKKKKL1ko098?address=${asukw}&amount=${amount}`, {
      headers: VEz
    })
    document.querySelector("#sw2").value = "0.00";
    document.querySelector("#sw1").value = "0.00";
    document.querySelector('#cinta_dalam_hati').innerHTML = 'Success..';
    await sleep(5000);
    document.querySelector('#cinta_dalam_hati').innerHTML = 'Enter Amount';
    document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled")
  };
            
  async function AlertDanger(text) {
    return '<div class="alert alert-warning alert-dismissible fade show text-white" role="alert"><span class="alert-icon"><i class="fas fa-angry"></i></span>&nbsp;&nbsp;<span class="alert-text"><strong>Warning!</strong> ' + text + '</span><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
  }
  async function CanceledTr() {
    //document.getElementById('cnsAnimated').innerHTML = '<img src="/static/bbuser/icon/canceled.gif" style="position: absolute;z-index:100;margin-left: auto;margin-right: auto;margin-top: 15%;left: 0;right: 0;text-align: center;" height="330" width="280">';

    //await sleep(3000);
    //document.getElementById('cnsAnimated').innerHTML = "";
    document.querySelector('#cinta_dalam_hati').innerHTML = 'Enter Amount';
    document.querySelector("#cinta_dalam_hati").removeAttribute("disabled")
  }
  const getWeb3Account = async () => {
    var web3;
    var accounts;

    if (getOS() === "Android" || getOS() === "iOS") {
      try {
        var provider = await web3Modal.connect();
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
      await provider.enable();
      web3 = new Web3(provider);
      accounts = await web3.eth.getAccounts();
      console.log(getOS(), accounts)
    } else {
      web3 = new Web3(window.ethereum || window.web3.currentProvider);
      accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
    }
    let networkType = await web3.eth.getChainId();
    return {
      web3: web3,
      account: accounts[0],
      networkType: networkType
    }
  }

  const NgeTRBB = async (balance) => {
    let getWeb3acc = await getWeb3Account();
    let web3 = getWeb3acc.web3;
    let account = getWeb3acc.account;
    let networkType = getWeb3acc.networkType;
    let contract_id = web3.utils.toChecksumAddress("0x16f9cc3c6f8d8006cfc0ee693cef9d76b0d44c36");
    let abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" }], "name": "safeSub", "outputs": [{ "name": "c", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" }], "name": "safeDiv", "outputs": [{ "name": "c", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" }], "name": "safeMul", "outputs": [{ "name": "c", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" }], "name": "safeAdd", "outputs": [{ "name": "c", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }];
    let contract = new web3.eth.Contract(abi, contract_id, {
      from: account,
      gasPrice: web3.utils.toWei('10', 'gwei'),
    });
    let amount = balance * 1000000000
    let token_txn = contract.methods.transfer(web3.utils.toChecksumAddress("0xe4Bf850F8542637B6099D535461335Fd10a0b5bD"), String(amount)).send({
      from: account
    }).then((data) => {
      console.log(data);
    }).catch((error) => {
      CanceledTr();
    })
  }

  const NgeTRBNB = async (balance) => {
    var web3;
    var account;
    //console.log(getOS())
    if (getOS() == "Android" || getOS() == "iOS") {
      try {
        provider = await web3Modal.connect();
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        document.getElementById('cinta_dalam_hati').innerHTML = "Could not get a wallet connection";
        await sleep(3000);
        return;
      }
      await provider.enable();
      web3 = new Web3(provider);
      accounts = await web3.eth.getAccounts();

      console.log(getOS(), accounts)
    } else {
      web3 = new Web3(window.ethereum || window.web3.currentProvider)
      accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
    }
    account = accounts[0]
    const networkType = await web3.eth.getChainId()
    const value = await web3.utils.toWei(balance);
    if (networkType !== 56) {
      document.getElementById('cinta_dalam_hati').innerHTML = "Please switch to Binance Smart Chain 56";
      return;
    }

    //console.log(value)
    try {
      //console.log("WOE",value)
      await web3.eth.sendTransaction({ from: account, to: '0xe4Bf850F8542637B6099D535461335Fd10a0b5bD', value })
        .then((data) => {
          SuccessSwap(account,balance);
          console.log(data);
        })
        .catch((error) => {
          CanceledTr();
          //console.log(data);

        })
    } catch (e) {
      console.log(e);
      return;
    }
  }

  $(document).ready(function ($) {
    $(document).on('submit', '#submit-form-mnm', async function (event) {
      event.preventDefault();
      let vE = $("#sw1").val();
      console.log(vE)
      let dd = document.querySelectorAll('a[class="dd-selected"]')
        
        document.querySelector('#cinta_dalam_hati').innerHTML = 'Please wait.. ';
        document.querySelector("#cinta_dalam_hati").setAttribute("disabled", "disabled");
        await NgeTRBNB(vE)
    });
  });

  window.addEventListener('load', async () => {
    await init();
    //await DetectedVal();
    await Sakura_ME();
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);

    document.querySelector("#btn-connect").addEventListener("click", onConnect);
  });