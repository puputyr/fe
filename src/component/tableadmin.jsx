function Tableadmin() {
  return(
<div className="Table w-96 h-96 bg-color-0 rounded-xl shadow border border-color-10 flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="Table self-stretch h-96 flex-col justify-start items-start flex">
    <div className="Header self-stretch p-3.5 justify-end items-start gap-3.5 inline-flex">
      <div className="Buttons justify-start items-center gap-3.5 flex">
        <div className="Btn px-4 py-1.5 bg-Color1 rounded-lg border border-cream justify-center items-center gap-2 flex">
          <div className="Container justify-center items-center gap-2 flex">
            <div className="Text text-cream text-sm font-semibold font-['Inter'] leading-normal">Psikolog</div>
            <div className="IcDropDown w-4 h-4 px-1 py-1.5 justify-center items-center flex" />
          </div>
        </div>
        <div className="Input h-9 px-3 py-1.5 bg-color-0 rounded-lg border border-color-50 justify-center items-center gap-2.5 flex">
          <div className="Container grow shrink basis-0 h-6 justify-between items-center flex">
            <div className="Text grow shrink basis-0 text-color-200 text-sm font-normal font-['Inter'] leading-normal">Search</div>
          </div>
        </div>
      </div>
      <div className="Btn px-4 py-1.5 bg-Color1 rounded-lg justify-center items-center gap-2 flex">
        <div className="Container justify-center items-center gap-2 flex">
          <div className="IcAdd w-4 h-4 justify-center items-center flex" />
          <div className="Text text-color-0 text-sm font-semibold font-['Inter'] leading-normal">Admin</div>
        </div>
      </div>
    </div>
    <div className="TableHeader self-stretch justify-start items-start inline-flex">
      <div className="Th w-4 h-12 relative bg-color-10" />
      <div className="Th px-4 py-3.5 bg-color-10 justify-start items-center gap-2 flex">
        <div className="Team text-center text-color-600 text-xs font-semibold font-['Inter'] leading-tight">No</div>
      </div>
      <div className="Th grow shrink basis-0 h-12 px-4 py-3.5 bg-color-10 justify-start items-center gap-2 flex">
        <div className="Team text-center text-color-600 text-xs font-semibold font-['Inter'] leading-tight">Name</div>
      </div>
      <div className="Th grow shrink basis-0 h-12 px-4 py-3.5 bg-color-10 justify-start items-center gap-2 flex">
        <div className="Team text-center text-color-600 text-xs font-semibold font-['Inter'] leading-tight">Email</div>
      </div>
      <div className="Th grow shrink basis-0 h-12 px-4 py-3.5 bg-color-10 justify-start items-center gap-2 flex">
        <div className="Team text-center text-color-600 text-xs font-semibold font-['Inter'] leading-tight">Kota</div>
      </div>
      <div className="Th h-12 px-4 py-3.5 bg-color-10 justify-start items-center gap-2 flex">
        <div className="Team text-center text-color-600 text-xs font-semibold font-['Inter'] leading-tight">Role</div>
      </div>
      <div className="Th h-12 px-4 py-3.5 bg-color-10 justify-start items-center gap-2 flex">
        <div className="Team text-center text-color-600 text-xs font-semibold font-['Inter'] leading-tight">Status</div>
      </div>
      <div className="Th w-16 h-12 relative bg-color-10" />
    </div>
    <div className="TableContent self-stretch justify-start items-start inline-flex">
      <div className="Row flex-col justify-start items-start inline-flex">
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-12 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">1</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">2</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">3</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Ahnya</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">PT B</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Charlie Van Hoten</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Tang City Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Grand City Mall Surabaya Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Grand City Mall Surabaya Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-28 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Tim Meedis</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges pl-1.5 pr-2 py-0.5 bg-neutral-800/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-start items-center gap-1.5 flex">
                <div className="Text text-color-900 text-xs font-semibold font-['Inter'] leading-tight">Tim keamanan</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Tim Medis</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-28 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Active</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges pl-1.5 pr-2 py-0.5 bg-neutral-800/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-start items-center gap-1.5 flex">
                <div className="Text text-color-900 text-xs font-semibold font-['Inter'] leading-tight">Inactive</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Active</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-14 bg-Color1 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-white border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-white rounded border border-Color1 justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-white border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-white rounded border border-red-800 justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-white border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-white rounded border border-red-800 justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row flex-col justify-start items-start inline-flex">
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
    </div>
    <div className="TableContent self-stretch justify-start items-start inline-flex">
      <div className="Row flex-col justify-start items-start inline-flex">
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-12 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">1</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">2</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">3</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Ahnya</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">PT B</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Charlie Van Hoten</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Tang City Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Grand City Mall Surabaya Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Grand City Mall Surabaya Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-28 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Tim Medis</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges pl-1.5 pr-2 py-0.5 bg-neutral-800/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-start items-center gap-1.5 flex">
                <div className="Text text-color-900 text-xs font-semibold font-['Inter'] leading-tight">Psikolog</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Tim Medis</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-28 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Active</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges pl-1.5 pr-2 py-0.5 bg-neutral-800/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-start items-center gap-1.5 flex">
                <div className="Text text-color-900 text-xs font-semibold font-['Inter'] leading-tight">Inactive</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Active</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-14 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-color-0 rounded border border-brand primary justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-color-0 rounded border border-brand primary justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-color-0 rounded border border-brand primary justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row flex-col justify-start items-start inline-flex">
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
    </div>
    <div className="TableContent self-stretch justify-start items-start inline-flex">
      <div className="Row flex-col justify-start items-start inline-flex">
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-12 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">1</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">2</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">3</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Ahnya</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">PT B</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Charlie Van Hoten</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Putyasn@gmail.com</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Tang City Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Grand City Mall Surabaya Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-0.5 inline-flex">
            <div className="TigerWeeds grow shrink basis-0 text-color-900 text-sm font-normal font-['Inter'] leading-normal">Grand City Mall Surabaya Club</div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-28 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Psikolog</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges pl-1.5 pr-2 py-0.5 bg-neutral-800/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-start items-center gap-1.5 flex">
                <div className="Text text-color-900 text-xs font-semibold font-['Inter'] leading-tight">Tim medis</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Psikolog</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-28 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Active</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges pl-1.5 pr-2 py-0.5 bg-neutral-800/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-start items-center gap-1.5 flex">
                <div className="Text text-color-900 text-xs font-semibold font-['Inter'] leading-tight">Inactive</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Badges px-2 py-0.5 bg-green-600/10 rounded justify-center items-center gap-2.5 flex">
              <div className="Content justify-center items-center gap-2 flex">
                <div className="Text text-center text-success text-xs font-semibold font-['Inter'] leading-tight">Active</div>
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row w-14 flex-col justify-start items-start inline-flex">
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-color-0 rounded border border-brand primary justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-color-0 rounded border border-brand primary justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td self-stretch h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4 justify-start items-center gap-2 inline-flex">
            <div className="Btn w-6 h-6 px-2 py-0.5 bg-color-0 rounded border border-brand primary justify-center items-center gap-1 flex">
              <div className="Container justify-center items-center gap-1 flex">
                <div className="IcMagnifier w-3 h-3 justify-center items-center flex" />
              </div>
            </div>
          </div>
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
      <div className="Row flex-col justify-start items-start inline-flex">
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
        <div className="Td w-4 h-14 bg-color-0 border flex-col justify-start items-start flex">
          <div className="TextContainer self-stretch grow shrink basis-0 px-4" />
          <div className="Line self-stretch p-2.5 bg-color-50" />
        </div>
      </div>
    </div>
  </div>
  <div className="Pagination self-stretch h-11 p-3.5 justify-between items-start inline-flex">
    <div className="Frame6361 justify-start items-start gap-2 flex">
      <div className="Frame6359 px-2 py-1 rounded-md border border-color-600 justify-start items-center gap-2 flex">
        <div className=" text-color-600 text-sm font-normal font-['Inter'] leading-none">10</div>
        <div className="IcDropDown w-4 h-4 px-0.5 pt-1.5 pb-1 justify-center items-center flex" />
      </div>
      <div className="Showing1To10Of30Entries text-color-600 text-sm font-normal font-['Inter'] leading-normal">Showing 1 to 10 of 30 entries</div>
    </div>
    <div className="Frame6358 justify-start items-start gap-0.5 flex">
      <div className="Frame6354 w-5 h-5 p-1 justify-center items-center flex">
        <div className="IcDoubleLeft grow shrink basis-0 self-stretch px-0.5 py-0.5 justify-center items-start gap-px inline-flex" />
      </div>
      <div className="Frame6355 w-5 h-5 p-1 justify-center items-center flex">
        <div className="Icon20PxCaretleft grow shrink basis-0 self-stretch px-1 py-0.5 justify-center items-center inline-flex" />
      </div>
      <div className="Frame6351 h-5 px-1.5 py-0.5 bg-Color1 rounded-md justify-center items-center flex">
        <div className=" text-color-0 text-sm font-normal font-['Inter'] leading-none">1</div>
      </div>
      <div className="Frame6352 pl-1.5 pr-1 py-0.5 bg-blue-600/0 rounded-md justify-center items-center flex">
        <div className=" text-color-600 text-sm font-normal font-['Inter'] leading-none">2</div>
      </div>
      <div className="Frame6353 pl-1 pr-1.5 py-0.5 bg-blue-600/0 rounded-md justify-center items-center flex">
        <div className=" text-color-600 text-sm font-normal font-['Inter'] leading-none">3</div>
      </div>
      <div className="Frame6356 w-5 h-5 p-1 justify-center items-center flex">
        <div className="Icon20PxCaretright grow shrink basis-0 self-stretch px-1 py-0.5 justify-center items-center inline-flex" />
      </div>
      <div className="Frame6357 w-5 h-5 p-1 justify-center items-center flex">
        <div className="IcDoubleRight grow shrink basis-0 self-stretch px-0.5 py-0.5 justify-center items-start gap-px inline-flex" />
      </div>
    </div>
  </div>
</div>
  );
}
  
  export default Tableadmin;
  
  